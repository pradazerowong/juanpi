<template>
	<div style="background-color:#f4f4f8;">
		<XorderHeader />
		<XorderBox/>
		<XorderFooter/>
		<XorderCar/>
		
		
		
	</div>
</template>
<script>
import XorderHeader from "../components/XorderHeader.vue";
import XorderBox from "../components/XorderBox.vue";
import XorderFooter from "../components/XorderFooter.vue";
import XorderCar from "../components/XorderCar.vue";

export default {
  components: {
    XorderHeader,
    XorderBox,
    XorderFooter,
    XorderCar
  
  }
};
</script>
<style scoped>

</style>