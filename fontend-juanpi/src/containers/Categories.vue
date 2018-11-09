<template>
	<div class="cate-list">
		<XcategoriesHeader />
    <XcategoriesTab />
		<router-view></router-view>
		<Xfooter />
	</div>
</template>
<script>
import XcategoriesHeader from "../components/XcategoriesHeader.vue";
import XcategoriesTab from "../components/XcategoriesTab.vue";
import Xfooter from "../components/Xfooter.vue";
export default {
  components: {
    XcategoriesHeader,
    XcategoriesTab,
    Xfooter
  }
};
</script>
<style scoped>
 	@import url("../assets/cate_group.css");
</style>