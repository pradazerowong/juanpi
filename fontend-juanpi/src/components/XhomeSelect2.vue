<template>
	<div class="sc-jqCOkK bcZFQQ">
		<div class="goods sc-uJMKN eAzbYJ" id="indexGood">
			<XlistBox />
			<component :is="i.component" v-for="i in items"></component>
		</div>
	</div>
</template>
<script>
	import XlistBox from "./XlistBox.vue";
	export default{
		data(){
			return{
				items:[]
			}
		},
		components:{
			XlistBox
		},
		activated () {
			window.addEventListener('scroll', this.loadMore,true);
		},
		deactivated(){
			window.removeEventListener('scroll',this.loadMore,true);
		},
		methods:{
			loadMore(){
				var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
				var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				if(scrollTop + windowHeight >= (scrollHeight-2)){
					this.items.push({
         				component: XlistBox
       				})
				}

			}
		}
	}
</script>