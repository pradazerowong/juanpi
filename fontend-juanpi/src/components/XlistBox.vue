<template>
	<section>
		<div @click="toDetailPage(item[0])"  class="sc-bbmXgH gCgGoL"  v-for="(item,key,i) in goods_list" :key="'goods_list'+i">
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
	</section>
</template>
<script>
	import axios from "axios";
	
	export default {

		data() {
			return {
				goods_list:{}
			}
		},
		
		created:function(){
			this.getAjax();
		},
		methods: {
			
			toDetailPage(goodsId) {
				this.$router.push({
					name: 'detail',
					query: {id:goodsId}
				});
			},
			getAjax:function(){
				
				axios.get('http://localhost:3000/api/getIndex')
					.then((response)=>{		
						this.goods_list = { ...response.data.goods_li };
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}

	}
</script>