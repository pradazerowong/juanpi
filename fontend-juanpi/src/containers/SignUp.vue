<template>
	<div class="app notfull vip">
		<XsignHeader status="signUp" />
		<XsignUpMain />
	</div>
</template>
<script>
	import XsignHeader from "../components/XsignHeader.vue";
	import XsignUpMain from "../components/XsignUpMain.vue";
	export default {
	  components: {
	    XsignHeader,
	    XsignUpMain
	  }
	};
</script>