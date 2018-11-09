<template>
<div class="userBox">
	<!-- 新增我的订单入口 -->
	<a href="" class="user-item-horizontal">
		<span>我的订单</span>
		<span class="iconfont icon-liebiaojiantou fr"></span>
		<span class="label fr">全部订单</span>
	</a>
	<div class="userItem">
		<!-- 新增横菜单 -->
		<a href="">
			<em class="iconfont icon-icon" style="font-family:'iconfont'"></em>
			<span class="text">待付款</span> </a>
		<a href="">
			<em class="iconfont icon-daichengtuan"></em>
			<span class="text">待成团</span> </a>
		<a href="">
			<em class="iconfont icon-daishouhuo"></em>
			<span class="text">待收货</span> </a>
		<a href="//m.juanpi.com/refund/backlist">
			<em class="iconfont icon-refund"></em>
			<span class="text">退款/售后</span>
		</a>
	</div>
	<!-- 模块广告 -->
	<div id="banner_block"></div>
	<div id="module-ad"></div>

	<div class="userItems">
		<a href="" class="user-item-horizontal">
			<span>我的优惠券</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>
		</a>

		<a href="" class="user-item-horizontal">
			<span>
				我的收藏
			</span>
			<span class="iconfont icon-liebiaojiantou fr">
				<i class="sc_circle"></i>
			</span>
		</a>
		<a href="" class="user-item-horizontal">
			<span>我的拼团</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>

		</a>
		<a href="" class="user-item-horizontal">
			<span>我的免单券</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>
			<span class="label fr">0张</span>

		</a>
		<a href="" class="user-item-horizontal">
			<span>借钱</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>
			<span class="label fr">新用户免费领1000元</span>
		</a>
	</div>
	<div class="userItems">
		<a href="" class="user-item-horizontal">
			<span>客服中心</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>

		</a>
		<a href="" class="user-item-horizontal no-bottom">
			<span>关于卷皮</span>
			<span class="iconfont icon-liebiaojiantou fr"></span>

		</a>
	</div>
	<input type="hidden" id="isBoxShow" name="isBoxShow" value="0">
	<input type="hidden" id="fromLoginUrl" name="fromLoginUrl" value="">
</div>
</template>
<style scoped>
	@import url("../assets/user_center.css");
	@import url("../assets/font2/iconfont.css");
</style>