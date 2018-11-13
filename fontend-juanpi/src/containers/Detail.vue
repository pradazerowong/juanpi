<template>
	<div style="background-color: rgb(244, 244, 248);" class="App">
		<XdetailImg />
		<XdetailTitle />
		<XdetailDescription />
	</div>
</template>
<script>
	import XdetailImg from "../components/XdetailImg.vue";
	import XdetailTitle from "../components/XdetailTitle.vue";
	import XdetailDescription from "../components/XdetailDescription.vue";
	import axios from "axios";
	export default {
	  	components: {
	    	XdetailImg,
	    	XdetailTitle,
	    	XdetailDescription
	  	},
	  	data(){
	  		return{
	  			goodsId:this.$route.query.id
	  		}
	  	},
	  	methods:{
	  	
	  		getData(){
	  			console.log(this.goodsId)
	  			var _self = this;
				axios.get('http://localhost:3000/api/getDetail/',{
					params:{
						goodsId:this.goodsId
					}
				})
					.then((response)=>{		
						console.log(response)
					})
					.catch(function(error) {
						console.log(error);
					});
			}
	  	},
	  	created(){
	  		this.getData();
	  	}
	};
</script>