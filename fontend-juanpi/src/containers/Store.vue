<template>
	<div style="background-color:#f4f4f8;">
		<XstoreHeader />
		<XstoreBanner/>
		<XlistNav/>
		<XlistGoods/>
		<XorderCar/>
		

	</div>
</template>
<script>
	import XstoreHeader from "../components/XstoreHeader.vue";
	import XstoreBanner from "../components/XstoreBanner.vue";
	import XlistNav from "../components/XlistNav.vue";
	import XlistGoods from "../components/XlistGoods.vue";
	import XorderCar from "../components/XorderCar.vue";
	
	export default {
		components: {
			XstoreHeader,
			XstoreBanner,
			XlistNav,
			XlistGoods,
			XorderCar

		}
	};
</script>
<style scoped>

</style>