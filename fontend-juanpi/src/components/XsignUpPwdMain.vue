<template>
	<div class="wap-login">
		<p class="reg-notice">请设置密码并妥善保管</p>
		<form onsubmit="return false;" method="post" action="https://user.juanpi.com/Muser/setPwd" id="passwordForm">
			<div class="login-info">
				<ul>
					<li class="clear">
						<input type="text" name="password" id="password" placeholder="密码(6-16个数字、字母和符号组合)" class="normalInput fl">
						<i style="display: none;" class="reg-close fl" id="reg-code-close">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&amp;sv=449ce9ee">
						</i>
					</li>
				</ul>
				<input type="hidden" name="token" value="">
				<input type="hidden" name="mtokenact" value="reg">
				<input type="hidden" name="action" value="">
				<label class="submitBtn">
					<a href="javascript:;" id="submitBtn" class="disabled">注册</a>
					<input type="submit" id="setPassword" class="disabled" value="注册">
				</label>
			</div>
		</form>
	</div>
</template>