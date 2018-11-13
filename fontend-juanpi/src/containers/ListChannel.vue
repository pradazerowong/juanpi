<template>
	<div class="goods" id="goods" style="display: block;">
		<XlistGoods :channel="channel" />
		
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