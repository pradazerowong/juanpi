<template>
	<div>
		<ul class="info-input">
			<li>
				<input type="text" name="username" id="username" placeholder="手机号/邮箱/用户名" value="" class="normalInput">
				<em class="reg-close" style="display: none;">
					<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
				</em>
			</li>
			<li>
				<div class="quickLoginHmtl clear">
					<input type="tel" class="code-txt normalInput fl" id="code" placeholder="请输入验证码" name="code">
					<i style="display: none;" class="reg-close fl" id="reg-code-close">
						<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
					</i>
					
					<a @click="getCode()" class="btn_get get-code disable-code"  id="code_btn" href="javascript:;">
					<img  v-show="isShowCodeBox" src="http://108.61.219.68:8000/user/verifycode/" id="verify" class="isShowCodeBox" >
					获取验证码</a>
				</div>
			</li>
			<li>
				<input type="password" name="password" id="password" placeholder="密码" class="normalInput">
				<em class="reg-close" style="display: none;">
					<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
				</em>
			</li>
		</ul>
	
	</div>
</template>
<script>
	import axios from "axios";
	export default{
		data(){
			return{
				isShowCodeBox:false,
				sr:null
			}
		},
		methods:{
			getCode(){
				this.isShowCodeBox = !this.isShowCodeBox;
				
			  
			},
			exitCodeBox(){
				this.isShowCodeBox = false;
			}
		}
	}
</script>
<style scoped>
.isShowCodeBox{
	position: absolute;
    left: -30px;
}
</style>
