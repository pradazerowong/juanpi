<template>
	<div @click="toDetailPage" class="sc-bbmXgH gCgGoL">
		<a class="GoodsLink" href="javascript:;">
			<div class="sc-gGBfsJ bHohRa">
				<div class="sc-jnlKLf bYqRFU"><img class="sc-fYxtnH idxkID" src="https://goods1.juancdn.com/goods/180928/1/8/5bad830e33b08908b1054f07_800x800.jpg?iopcmd=thumbnail&amp;type=11&amp;height=310&amp;width=310">
					<div class="sc-elJkPf lcVTjL"><img class="sc-jtRfpW QcHRp" src="https://goods8.juancdn.com/bao/170321/f/3/58d07fbdad0a49a7288b45eb_180x90.png"></div>
				</div>
				<div class="sc-tilXH cEQZgN"><span class="sc-ktHwxA gVLSd">¥119-1699</span></div>
				<div class="sc-cmTdod dFUsnh">热嘉女装上新专场<p class="sc-kTUwUJ kDoQxf">上新</p>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
	export default{
		methods:{
			toDetailPage(){
				this.$router.push({name:'detail'});
			}
		}
	}
</script>