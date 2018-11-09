<template>
	<div class="sc-jqCOkK bcZFQQ">
		<div class="goods sc-uJMKN eAzbYJ" id="indexGood">
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
			<XlistBox />
		</div>
	</div>
</template>
<script>
	import XlistBox from "./XlistBox.vue";
	export default{
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
				if(scrollTop + windowHeight >= (scrollHeight-1)){
					console.log(666);
					var indexGood = document.querySelector('#indexGood');
				}

			}
		}
	}
</script>
