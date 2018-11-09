<template>
	<div style="background-color: rgb(244, 244, 248); padding-bottom: 2.13333rem; position: relative;">
		<XhomeHeader />
		<XhomeMain />
		<Xfooter />
	</div>
</template>
<script>
import XhomeHeader from "../components/XhomeHeader.vue";
import XhomeMain from "../components/XhomeMain.vue";
import Xfooter from "../components/Xfooter.vue";
export default {
  	components: {
    	XhomeHeader,
    	XhomeMain,
    	Xfooter
  	}
	
};
</script>