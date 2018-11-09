<template>
	<div class="app common">
		<XsignHeader status="signUpPwd" />
		<XsignUpPwdMain />
	</div>
</template>
<script>
	import XsignHeader from "../components/XsignHeader.vue";
	import XsignUpPwdMain from "../components/XsignUpPwdMain.vue";
	export default {
	  components: {
	    XsignHeader,
	    XsignUpPwdMain
	  }
	};
</script>