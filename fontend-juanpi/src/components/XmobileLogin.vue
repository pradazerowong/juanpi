<template>
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
</template>