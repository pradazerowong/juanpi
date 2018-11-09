<template>
	<div>
		<header id="head" class="head">
			<div class="fixtop">
				<span id="t-find"><a class="btnleft" href="javascript:window.history.go(-1)"><span class="iconfont icon-fanhui"></span></a>
				</span>
				<span id="t-index">全部订单</span>
				<span id="t-user"></span>
			</div>
		</header>
		<div class="top-menu">
			<div class="top-menu-box">
				<nav data-page="0">
					<a class="active" href="//m.juanpi.com/order">全部订单</a>
					<a href="//m.juanpi.com/order/index/t/1">待付款</a>
					<a href="//m.juanpi.com/order/index/t/13">待成团</a>
					<a href="//m.juanpi.com/order/index/t/14">待收货</a>
				</nav>
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped>
	.btnleft {
		position: fixed;
		top: 0;
		
	}
	

	.top-menu {
		width: 100%;
		max-width: 16rem;
		min-width: 8rem;
		background: #fff;
		line-height: 1;
		height: 48px
	}
	
	[data-dpr="2"] .top-menu {
		height: 96px
	}
	
	[data-dpr="3"] .top-menu {
		height: 144px
	}
	
	.top-menu .top-menu-box {
		width: 100%;
		overflow: auto;
		overflow-x: auto;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		background: #fff;
		position: static;
		top: 0;
		z-index: 400;
		max-width: 16rem;
		min-width: 8rem;
		height: 48px
	}
	
	[data-dpr="2"] .top-menu .top-menu-box {
		height: 96px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box {
		height: 144px
	}
	
	.top-menu .top-menu-box.fixed {
		position: fixed
	}
	
	.top-menu .top-menu-box nav {
		white-space: nowrap;
		overflow: auto;
		overflow-y: hidden;
		background: #fff;
		height: 48px
	}
	
	[data-dpr="2"] .top-menu .top-menu-box nav {
		height: 96px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box nav {
		height: 144px
	}
	
	.top-menu .top-menu-box nav a {
		line-height: 48px;
		height: 48px;
		display: inline-block;
		font-size: 14px;
		text-align: center;
		color: #333;
		white-space: nowrap;
		box-sizing: border-box;
		padding: 0 .25rem;
		width: 25%;
		background: #fff
	}
	
	[data-dpr="2"] .top-menu .top-menu-box nav a {
		line-height: 96px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box nav a {
		line-height: 144px
	}
	
	[data-dpr="2"] .top-menu .top-menu-box nav a {
		height: 96px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box nav a {
		height: 144px
	}
	
	[data-dpr="2"] .top-menu .top-menu-box nav a {
		font-size: 28px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box nav a {
		font-size: 42px
	}
	
	.top-menu .top-menu-box nav a.active {
		color: #ff464e;
		border-bottom: 4px solid #ff464e;
		border-bottom-width: 2px
	}
	
	[data-dpr="2"] .top-menu .top-menu-box nav a.active {
		border-bottom-width: 4px
	}
	
	[data-dpr="3"] .top-menu .top-menu-box nav a.active {
		border-bottom-width: 6px
	}
	
	
</style>