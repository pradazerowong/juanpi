<template>
	<div class="list-left" style="height: 1281px;">
		<ul class="list-title" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<li @click="selectCate(index)" v-for="(c,index) in cates" class="bc" :class="{
				colorRed:index===cate
			}">{{c.title}}</li>
			
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				cates:[{
					title:"女装",
					isSelect:true,
					path:"womensClothing"
				},{
					title:"男装",
					isSelect:false,
					path:"mensClothing"
				},{
					title:"母婴",
					isSelect:false,
					path:"maternalAndInfant"
				},{
					title:"鞋子",
					isSelect:false,
					path:"shoe"
				},{
					title:"箱包",
					isSelect:false,
					path:"luggage"
				},{
					title:"居家百货",
					isSelect:false,
					path:"commodity"
				},{
					title:"家电数码",
					isSelect:false,
					path:"household"
				},{
					title:"内衣配饰",
					isSelect:false,
					path:"underclothesAndAccessory"
				},{
					title:"美妆",
					isSelect:false,
					path:"beautyMakeUp"
				},{
					title:"运动户外",
					isSelect:false,
					path:"sportsAndOutDoor"
				},{
					title:"美食",
					isSelect:false,
					path:"goodies"
				},{
					title:"车品文娱",
					isSelect:false,
					path:"carEntertainment"
				}],
				cate:0
			}
		},
		methods:{
			selectCate(cate){
				this.cate = cate;
				this.$router.push({name:this.cates[cate].path})
			},
			getCode(){
				axios.get("http://localhost:3000/api/getIndex")
				.then(function(response) {
		          	console.log(response);
		        })
	        	.catch(function(error) {
	          		console.log(error);
		        });
			  
			}
		}
	}
</script>
