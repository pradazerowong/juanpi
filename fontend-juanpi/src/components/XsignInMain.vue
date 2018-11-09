<template>
	<div class="wap-login">
		<ul id="login_switch" class="login-txt">
			<li @click="selectLoginSwitch(index)" :class="{
				active:index===loginSwitch
			}" v-for="(l,index) in loginSwitchs">{{l.title}}</li>
		</ul>
		<form id="normal-logo" action="/user/login" method="post" enctype="application/x-www-form-urlencoded" style="">
			<input name="return_url" type="hidden" value="//m.juanpi.com/cart/?select=3_1">
			<div class="login-info">
				<keep-alive>

					<component :is="currentSwitch"></component>

				</keep-alive>

				<a id="btn_login" class="sub disable-btn" rel="nofollow">登 录</a>
				<div id="login_l" class="other-action">
					<label class="freeLogin on"><input type="checkbox" class="ck" name="auto" checked="checked"><i class="before"><img
							 src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&amp;sv=449ce9ee"></i>两周内免登录</label>
					<a href="//m.juanpi.com/user/forget" target="_parent" class="free-reg">忘记密码？</a>
				</div>
			</div>
		</form>
		<form id="quick-login" action="/muser/password" method="post" enctype="application/x-www-form-urlencoded" style="display: none;">
			<div class="login-info">
				<ul class="info-input clear">
					<li>
						<input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" class="normalInput">
						<em class="reg-close" style="display: none;" id="reg-mobile-close">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
						</em>
					</li>
					<li>
						<div class="quickLoginHmtl clear">
							<input type="tel" class="code-txt normalInput fl" id="code" placeholder="请输入验证码" name="code">
							<i style="display: none;" class="reg-close fl" id="reg-code-close">
								<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
							</i>
							<a class="btn_get get-code disable-code" id="code_btn" href="javascript:;">获取验证码</a>
						</div>
					</li>
				</ul>
				<input type="hidden" name="mtoken" value="b13429272cfcbc644af6a77cb907f24a" id="mtoken">
				<input type="hidden" name="mtokenact" value="quick" id="mtokenact">
				<a id="btn_quick_login" class="sub codeBtn disable-btn" rel="nofollow">登 录</a>
				<a style="display:none;" id="normal_login" class="sub disable-btn" rel="nofollow">登 录</a>
				<div id="quick_l" class="other-action">
					<label class="freeLogin on"><input type="checkbox" class="ck" name="auto_quick" checked="checked"><i class="before"><img
							 src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&amp;sv=449ce9ee"></i>两周内免登录</label>
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
				currentSwitch:"juanpiLogin"
			}
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