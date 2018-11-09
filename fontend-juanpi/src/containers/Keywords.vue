<template>
	<div class="app">
		<XkeywordsHeader />
		<XkeywordsMain />
	</div>
</template>
<script>
	import XkeywordsHeader from "../components/XkeywordsHeader.vue";
	import XkeywordsMain from "../components/XkeywordsMain.vue";
	export default {
	  components: {
	    XkeywordsHeader,
	    XkeywordsMain
	  }
	};
</script>