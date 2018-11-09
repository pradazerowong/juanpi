<template>
	<div>
		<div v-if="channel===0" class="goods-list clear" id="goods_block" style="display: flex;">
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
		<div v-if="channel===1" class="goods-list clear" id="goods_block" style="display: flex;">
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
		<div v-if="channel===2" class="goods-list clear" id="goods_block" style="display: flex;">
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
		<div v-if="channel===3" class="goods-list clear" id="goods_block" style="display: flex;">
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
		<div v-if="channel===4" class="goods-list clear" id="goods_block" style="display: flex;">
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
		props:["channel"],
		components:{
			XlistBox
		}
	}
</script>

<style>

</style>