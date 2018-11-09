<template>
	<div class="wap-login">
		<p class="reg-notice">请确保你的手机畅通，用于接收验证码短信</p>
		<form id="mobileFrom" method="post" action="/muser/password">
			<input name="ajax_action" type="hidden" value="" enctype="application/x-www-form-urlencoded">
			<div class="login-info">
				<ul class="info-input clear">
					<li>
						<input @input="inputPhone()" @focus="closeBtnShow()" @blur="closeBtnHidden()" type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" class="txt normalInput" v-model="phone">
						<em v-show="isCloseBtnShow" @click="clickCloseBtn" class="reg-close" id="reg-mobile-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee"></em>
					</li>
					<li class="clear">
						<input @input="inputCode()" @focus="closeBtnShow2()" @blur="closeBtnHidden2()" type="tel" class="txt normalInput code-txt fl" id="code" placeholder="请输入验证码" name="code" v-model="code">
						<i v-show="isCloseBtnShow2" @click="clickCloseBtn2" class="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee"></i>
						<a class="btn_get get-code disable-code fr" id="code_btn" href="javascript:;" @click="getCode()" :class="{
							codeBtnCur:isActive==='false'
						}">{{getCodeTxt}}</a>
					</li>
				</ul>
				<input type="hidden" name="hidMobile" id="hidMobile" value="">
				<input type="hidden" name="mtoken" id="mtoken" value="079cc6b9015f9950e211b09e64181f83">
				<a id="btn-code" href="javascript:;" class="codeBtn disable-btn">下一步</a>
			</div>
		</form>
	</div>
</template>
<script>
	export default{
		props:["status2"],
		data(){
			return{
				phone:this.phone,
				code:this.code,
				isCloseBtnShow:false,
				isCloseBtnShow2:false,
				isActive:false,
				time:0,
				getCodeTxt:"获取验证码"
			}
		},
		methods:{
			inputPhone(){	
				if(this.phone){
					this.isCloseBtnShow = true;
				}else{
					this.isCloseBtnShow = false;
				}		
				if(!(/^1[34578]\d{9}$/.test(this.phone))&&this.phone.length==11){
					this.isActive="false";
					alert("手机格式不正确");
				}else if((/^1[34578]\d{9}$/.test(this.phone))&&this.phone.length==11){
					this.isActive="true";
					console.log(this.isActive);
					this.time = 110;
				}else{
					this.isActive="false";
					console.log(this.isActive)
				}
			},
			inputCode(){	
				if(this.code){
					this.isCloseBtnShow2 = true;
				}else{
					this.isCloseBtnShow2 = false;
				}
			},
			closeBtnHidden(){
				this.isCloseBtnShow = false;
			},
			closeBtnHidden2(){
				this.isCloseBtnShow2 = false;
			},
			closeBtnShow(){
				if(this.phone){
					this.isCloseBtnShow = true;
				}else{
					this.isCloseBtnShow = false;
				}
			},
			closeBtnShow2(){
				if(this.code){
					this.isCloseBtnShow2 = true;
				}else{
					this.isCloseBtnShow2 = false;
				}
			},
			clickCloseBtn(){
				this.phone = '';
				this.isActive="false";
			},
			clickCloseBtn2(){
				this.code = '';
			},
			getCode(){
				var getCodeTimer=setInterval(()=>{
	                if ((this.time--) <= 0) {
	                     this.time=110;
	                     this.getCodeTxt="获取验证码";
	                     clearInterval(getCodeTimer);
	                } else{
	                     this.getCodeTxt=this.time+"s后重新获取";
	                }
                },1000)
            }
		}
	}
</script>
<style>
 	@import url("../assets/user.css");
 	#code_btn.codeBtnCur{
 		color: #ff464e;
 	}
</style>