<template>
	<div id="wraper">
		<div  v-if="channel===l" v-for="(item,key,l) in list" :key="'list'+l" class="third-cate" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<div class="cate-second" style="width: 72.64px;" v-for="(value,index) in item">
				<a @click="sendParams(value[0],value[1]) " :cid="value[0]" class="bc"  style="background: none;">
					<img v-bind:src="`http://108.61.219.68/static/type/${value[0]}.png`" class="cate-img lazy loaded">
					<span>{{value[1]}}</span>
				</a>

			</div>
			
			<div class="cate-bottom" ></div>
		</div>

		
	</div>
</template>
<script>
	import axios from "axios";
	export default{
		data(){
			return{
				list:{}
			}
		},
		methods:{
			
			sendParams (cid,cname){
				console.log(cid)
				
				this.$router.history.push({path: '/list/all', query: {id:cid,page:1,cname:cname}});
			},
			
			getCategories(){
				var _self = this;
				console.log(this)
				axios.get("http://localhost:3000/api/getCategories")
				.then(function(response) {
					_self.list = { ...response.data };
		     		console.log(_self.list)
		        })
	        	.catch(function(error) {
	          		console.log(error);
	          		
		        });
		      
			}
		},
		created(){
			this.getCategories();
		},
		props:["channel"]
	};
</script>
