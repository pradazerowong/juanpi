<template>
<div>
	<div v-if="status==='signIn'" id="head">
		<div class="fixtop">
			<a id="t-find" href="javascript:history.go(-1);" class="btnBack">
				<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&amp;sv=449ce9ee">
			</a>
			<span id="t-index" style="color:#fff">登录</span>
			<a id="t-user" href="#/signup" class="free-reg" rel="nofollow" target="_parent">注册</a>
		</div>
	</div>
	<div v-if="status==='signUp'" id="head" style="border-bottom: 1px solid #dedede;">
		<div class="fixtop" style="background: #fff;">
			<a href="javascript:history.go(-1);" id="t-find" class="btnBack">
				<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&amp;sv=449ce9ee">
			</a>
			<span id="t-index" style="color: #333;">注册</span>
			<span id="t-user"></span>
		</div>
	</div>
	<div v-if="status==='signUpPwd'" id="head" style="border-bottom: 1px solid #dedede;">
	<div class="fixtop" style="background: #fff;">
		<a id="t-find" href="" target="_parent" class="btnBack">
			<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&amp;sv=449ce9ee">
		</a>
		<span id="t-index">设置密码</span>
		<span id="t-user"></span>
	</div>
</div>
	</div>
</template>
<script>
	export default{
		props:["status"]
	}
</script>
<style scoped>
 	@import url("../assets/user.css");
</style>