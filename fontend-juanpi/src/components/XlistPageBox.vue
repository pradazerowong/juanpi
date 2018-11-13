<template>
	<section>
		<div @click="toDetailPage"  class="sc-bbmXgH gCgGoL"  v-for="(item,key,i) in goods_list" :key="'goods_list'+i">
			<a class="GoodsLink" href="javascript:;">
				<div class="sc-gGBfsJ bHohRa">
					<div class="sc-jnlKLf bYqRFU"><img class="sc-fYxtnH idxkID" :src="item[1]" style="height:160px;">
						<div class="sc-elJkPf lcVTjL"><img class="sc-jtRfpW QcHRp" src="https://goods8.juancdn.com/bao/170321/f/3/58d07fbdad0a49a7288b45eb_180x90.png"></div>
					</div>
					<div class="sc-tilXH cEQZgN"><span class="sc-ktHwxA gVLSd">¥{{item[3]}}-{{item[4]}}</span></div>
					<div class="sc-cmTdod dFUsnh">{{item[2]}}
						<p class="sc-kTUwUJ kDoQxf">上新</p>
					</div>
				</div>
			</a>
		</div>
		<div @click="loadMore" v-show="isShowLoadMore===true" class="more" id="page-next" style="display: none;">
			<a href="javascript:;">
				点此查看更多
				<img src="//jp.juancdn.com/jpwebapp/images/icon/more.png?ts=2018101718007111014-1&amp;sv=449ce9ee">
			</a>
		</div>
		<div class="more" id="page-loading" style="display: none;">
			<span>
            正在努力加载中
            <img style="height: 5px;" src="//jp.juancdn.com/jpwebapp/images/icon/goods_loading.gif?ts=2018101718007111014-1&amp;sv=449ce9ee"></span>
		</div>
		<!--专题页面 店铺入口-->
		<a href="//m.juanpi.com/store/" class="bc" data-bc="[&quot;trackEvent&quot;, &quot;temai&quot;, &quot;click_branddetails_all&quot;,&quot;json&quot;,&quot;&quot;]">
			<div id="store_inter" style="display: none;" class="store_inter">
				查看全部商品
				<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/cur_.png?fb42cba4-1&amp;sv=449ce9ee">
			</div>
		</a>

		<div v-show="isShowNoNext===true" class="more" id="page-no-next" style="display: none;">
			<span>亲，已经到底了</span>
		</div>
	</section>
</template>
<script>
import axios from "axios";
	
	export default {

		data() {
			return {
				goods_list:{},
				cid:this.$route.query.id,
				page:this.$route.query.page,
				isShowLoadMore:false,
				isShowNoNext:false
			}
		},
		
		mounted:function(){
			this.getData();
			window.addEventListener('scroll', this.showLoadMore,true);
		},
		destroyed(){
			window.removeEventListener('scroll',this.showLoadMore,true);
		},
		methods: {
			
			toDetailPage() {
				this.$router.push({
					name: 'detail'
				});
			},
			getData:function(){
				var cid=this.cid;
				var page=this.page;
				axios.get('http://108.61.219.68:8000/goods/good_list/'+cid+'/'+page)
					.then((response)=>{		
						console.log(response);
						this.goods_list = { ...response.data.goods_li };
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			showLoadMore(){
				var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				if(scrollTop + windowHeight >= (scrollHeight-55)&&this.isShowNoNext==false){
					this.isShowLoadMore=true;
					
				}else{
					this.isShowLoadMore=false;

				}
			},
			count(obj){
				var count = 0;  
			    for (var property in obj) {  
			        if (Object.prototype.hasOwnProperty.call(obj, property)) {  
			            count++;  
			        }  
			    }
			    return count;  	
			},
			loadMore(){
					console.log(this.goods_list)
					this.page++;
					console.log(this.page)
					var page = this.page;
					var cid = this.cid;
					axios.get('http://108.61.219.68:8000/goods/good_list/'+cid+'/'+page+'/')
					.then((response)=>{			
						var goodsList = response.data.goods_li;
						
						var count=this.count(goodsList);
						var keyarr=[];
						for(let i=1;i<=count;i++){
							keyarr.push(i+10);
						}
			
						for(let i in goodsList){
							goodsList[keyarr[i-1]]=goodsList[i];
							delete goodsList[i];
						}
	
						goodsList={...goodsList};
						this.goods_list = Object.assign({},this.goods_list,goodsList);

						var goodsListLen=this.count(goodsList);
						var goods_listLen=this.count(this.goods_list);
						console.log(goodsListLen)
						console.log(goods_listLen)
						if(goods_listLen==(goodsListLen+10)){
							this.isShowNoNext=true;
							this.isShowLoadMore=false;
						}
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}

	}
</script>