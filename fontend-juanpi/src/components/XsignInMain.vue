<template>
	<div class="wap-login">
		<ul id="login_switch" class="login-txt">
			<li @click="selectLoginSwitch(index)" :class="{
				active:index===loginSwitch
			}" v-for="(l,index) in loginSwitchs">{{l.title}}</li>
		</ul>
		<form id="normal-logo" action="http://108.61.219.68:8000/user/login/" method="post" style="">
			<div class="login-info">
				<keep-alive>

					<component :is="currentSwitch"></component>

				</keep-alive>

				<a id="btn_login" class="sub disable-btn" rel="nofollow">登 录</a>
				<input type="submit" class="disabled" value="登录">
				<div id="login_l" class="other-action">
					<a href="//m.juanpi.com/user/forget" target="_parent" class="free-reg">忘记密码？</a>
				</div>
			</div>
		</form>
		<div class="wap-app">
			<h3 class="third-txt">第三方账号快速登录</h3>
			<div class="third-app clear">
				<a href=""
				 class="qq" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_qq', '', '']);">
					<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&amp;sv=449ce9ee">
				</a>
				<a href=""
				 class="tao" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_taobao', '', '']);">
					<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&amp;sv=449ce9ee">
				</a>
				<a href=""
				 class="sina" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_weibo', '', '']);">
					<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&amp;sv=449ce9ee">
				</a>

			</div>
			<ul class="protection">
				<li class="fl"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&amp;sv=449ce9ee">全场包邮</li>
				<li><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&amp;sv=449ce9ee">100%人工质检</li>
				<li class="fr"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&amp;sv=449ce9ee">7天放心退</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import XjuanpiLogin from "./XjuanpiLogin.vue";
	import XmobileLogin from "./XmobileLogin.vue";
	import axios from "axios";
	export default {
		components: {
		    	juanpiLogin:XjuanpiLogin,
		    	mobileLogin:XmobileLogin
	  	},
		data(){
			return{
				loginSwitchs:[{
					title:"卷皮账号登录",
					switchType:"juanpiLogin"
				},{
					title:"手机快捷登录",
					switchType:"mobileLogin"
				}],
				loginSwitch:0,
				currentSwitch:"juanpiLogin",
				pw:""
			}
		},
		setSha(){
            let sha256 = require("js-sha256").sha256//这里用的是require方法，所以没用import
            this.pw = sha256(this.passWord)//要加密的密码
            console.log(this.pw)//这就是你加密之后的密码

          },
		methods:{
			selectLoginSwitch(loginSwitch){
				this.loginSwitch = loginSwitch;
				this.currentSwitch = this.loginSwitchs[loginSwitch].switchType;
			}
		}
	};
</script>
<style scoped>
 	@import url("../assets/user.css");
</style>