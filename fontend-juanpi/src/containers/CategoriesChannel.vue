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