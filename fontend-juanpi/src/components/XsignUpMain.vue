<template>
	<div class="wap-login">
		<form id="mobileFrom" method="post" action="http://108.61.219.68:8000/user/register/" >
			<div class="login-info">
			
				<ul class="info-input clear">
					<li>
						<input @input="phone?isCloseBtnShow=true:isCloseBtnShow=false" @focus="phone?isCloseBtnShow=true:isCloseBtnShow=false" @blur="isCloseBtnShow=false" type="tel" placeholder="请输入用户名(6-15位)" id="mobile" name="username" class="txt normalInput" v-model="phone">
						<em v-show="isCloseBtnShow" @click="phone=''" class="reg-close" id="reg-mobile-close">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
						</em>
					</li>
					<li>
						<input @input="email?isCloseBtnShow3=true:isCloseBtnShow3=false" @ifocus="email?isCloseBtnShow3=true:isCloseBtnShow3=false" @blur="isCloseBtnShow3=false" type="text" placeholder="请输入您的邮箱" id="email" name="email" class="txt normalInput" v-model="email">
						<em v-show="isCloseBtnShow3" @click="email=''" class="reg-close" id="reg-email-close">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
						</em>
					</li>
					<li class="clear">
						<input @input="code?isCloseBtnShow2=true:isCloseBtnShow2=false" @focus="code?isCloseBtnShow2=true:isCloseBtnShow2=false" @blur="isCloseBtnShow2=false" type="tel" class="txt normalInput code-txt fl" id="code" placeholder="请输入验证码" name="vc" v-model="code">
						<i v-show="isCloseBtnShow2" @click="code = ''" class="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee"></i>
						<a class="btn_get get-code disable-code fr" id="code_btn" href="javascript:;" @click="changeCode" :class="{
							codeBtnCur:isActive==='true'
						}">
						<img v-show="isActive" :src="`http://108.61.219.68:8000/user/verifycode/?${randomCode}`" id="verify" class="isShowCodeBox" >
						<span>{{getCodeTxt}}</span>
						</a>
					</li>
					<li class="clear">
						<input @input="activeBtn" @focus="password?isCloseBtnShow4=true:isCloseBtnShow4=false" @blur="setSha" type="password" name="password" id="password" placeholder="密码(6-16个数字、字母和符号组合)" class="normalInput fl" v-model='password'>
						<i style="display: none;" class="reg-close fl" id="reg-code-close">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
						</i>
					</li>
				</ul>

				<label class="submitBtn">
					<a href="javascript:;" id="submitBtn" :class="{
						disabled:isActiveBtn===false
					}">注册</a>
					<input type="submit" id="setPassword" class="disabled" value="注册">
				</label>
			</div>
		</form>
	</div>
</template>
<script>
	import axios from "axios";
	export default{
		props:["status2"],
		data(){
			return{
				phone:this.phone,
				code:this.code,
				email:this.email,
				isCloseBtnShow:false,
				isCloseBtnShow2:false,
				isCloseBtnShow3:false,
				isActive:false,
				getCodeTxt:"获取验证码",
				password:"",
				randomCode:"",
				isActiveBtn:false
			}
		},
		methods:{
			changeCode(){
				if(this.phone&&this.email){
					this.isActive=true;
				}
				this.randomCode = Math.random();
			},
		   	activeBtn() {
		   		if(this.password){
		   			this.isCloseBtnShow4=true;
		   		}else{
		   			this.isCloseBtnShow4=false;
		   		}
		   		if(this.phone&&this.email&&this.code&&this.password){
		   			this.isActiveBtn=true
		   		}else{
		   			this.isActiveBtn=false
		   		}
		    },
			setSha(){
				this.isCloseBtnShow4=false;
				if(this.password){
					let sha256 = require("js-sha256").sha256;
	                this.password = sha256(this.password);
				}
	            

	        }
		}
	}
</script>
<style>
 	@import url("../assets/user.css");
 	#code_btn.codeBtnCur{
 		color: #ff464e;
 	}
 	.isShowCodeBox{
	position: absolute;
    left: -30px;
}
#submitBtn.act{
	    background: #ff464e;
}
</style>