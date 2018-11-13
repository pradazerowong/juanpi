<template>
	<div class="list-right" style="height: 1281px;">
		<XcategoriesCard :channel="channel"/>
	</div>
</template>
<script>
	import XcategoriesCard from "../components/XcategoriesCard.vue";
	export default{
		data(){
			return{
				cates:[
					{
						title:"女装",
						isSelect:true,
						path:""
					},{
						title:"男装",
						isSelect:false,
						path:""
					},{
						title:"母婴",
						isSelect:false,
						path:""
					},{
						title:"鞋子",
						isSelect:false,
						path:""
					},{
						title:"箱包",
						isSelect:false,
						path:""
					},{
						title:"居家百货",
						isSelect:false,
						path:""
					},{
						title:"家电数码",
						isSelect:false,
						path:""
					},{
						title:"内衣配饰",
						isSelect:false,
						path:""
					},{
						title:"美妆",
						isSelect:false,
						path:""
					},{
						title:"运动户外",
						isSelect:false,
						path:""
					},{
						title:"美食",
						isSelect:false,
						path:""
					},{
						title:"车品文娱",
						isSelect:false,
						path:""
					}
				],
				channel:0
			}
		},
		components:{
			XcategoriesCard
		},
		methods:{
			setChannel(){
				var route = this.$router.history.current.path;
				switch(route){
					case "/categories/womensClothing":
						this.channel = 0;
						break;
					case "/categories/mensClothing":
						this.channel = 1;
						break;
					case "/categories/maternalAndInfant":
						this.channel = 2;
						break;
					case "/categories/shoe":
						this.channel = 3;
						break;
					case "/categories/luggage":
						this.channel = 4;
						break;
					case "/categories/commodity":
						this.channel = 5;
						break;
					case "/categories/household":
						this.channel = 6;
						break;
					case "/categories/underclothesAndAccessory":
						this.channel = 7;
						break;
					case "/categories/beautyMakeUp":
						this.channel = 8;
						break;
					case "/categories/sportsAndOutDoor":
						this.channel = 9;
						break;
					case "/categories/goodies":
						this.channel = 10;
						break;
					case "/categories/carEntertainment":
						this.channel = 11;
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
		}
	}
</script>