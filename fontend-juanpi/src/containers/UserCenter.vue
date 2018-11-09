<template>
	<div class="userCenter">
		<XuserCenterHeader />
		<XuserCenterMain />
		<Xfooter />
	</div>
</template>
<script>
import XuserCenterHeader from "../components/XuserCenterHeader.vue";
import XuserCenterMain from "../components/XuserCenterMain.vue";
import Xfooter from "../components/Xfooter.vue";
export default {
  components: {
  	XuserCenterHeader,
  	XuserCenterMain,
    Xfooter
  }
};
</script>