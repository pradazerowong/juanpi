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
	export default {
	  components: {
	    XdetailImg,
	    XdetailTitle,
	    XdetailDescription
	  }
	};
</script>