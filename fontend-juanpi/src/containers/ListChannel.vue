<template>
	<div class="goods" id="goods" style="display: block;">
		<XlistGoods :channel="channel" />
		<div class="more" id="page-next" style="display: none;">
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

		<div class="more" id="page-no-next" style="display: none;">
			<span>亲，已经到底了</span>
		</div>
	</div>
</template>
<script>
	import XlistGoods from "../components/XlistGoods.vue";
	export default{
		data(){
			return{
				sortTabs:[{
					title:"推荐",
					path:"all",
				},
				{
					title:"价格",
					path:"price"
				},
				{
					title:"销量",
					path:"sales"
				},
				{
					title:"上新",
					path:"starttime"
				},
				{
					title:"筛选",
					path:"screen"
				}
				],
				channel:0
			}
		},
		methods:{
			setChannel(){
				var route = this.$router.history.current.path;
				switch(route){
					case "/list/all":
						this.channel = 0;
						break;
					case "/list/price":
						this.channel = 1;
						break;
					case "/list/price":
						this.channel = 2;
						break;
					case "/list/starttime":
						this.channel = 3;
						break;
					case "/list/screen":
						this.channel = 4;
						break;
					default:
						this.channel = 0;
				}
			}
		},
		mounted(){
			this.setChannel();
		},
		watch:{
			$route(){
				this.setChannel();
			}
		},
		components:{
			XlistGoods
		}
	}
</script>