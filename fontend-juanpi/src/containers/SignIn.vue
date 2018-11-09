<template>
	<div class="app notfull vip">
		<XsignHeader status="signIn" />
		<XsignInMain />
	</div>
</template>
<script>
	import XsignHeader from "../components/XsignHeader.vue";
	import XsignInMain from "../components/XsignInMain.vue";
	export default {
	  components: {
	    XsignHeader,
	    XsignInMain
	  }
	};
</script>
<style scoped>
 	@import url("../assets/user.css");
</style>