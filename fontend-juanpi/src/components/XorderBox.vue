<template>
	<div class="item-empty">
		<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-order.png?598b3089-1&amp;sv=449ce9ee">
		<div class="b-title">暂无订单</div>
		<a href="//m.juanpi.com" class="btn">今日推荐</a>
	</div>
	
</template>

<script>
</script>

<style scoped>
	.item-empty {
		width: 100%;
		text-align: center;
		margin: 1.25rem 0;
		clear: both
	}
	
	.item-empty img {
		display: block;
		margin: 0 auto;
		margin-bottom: 12px;
		width: 140px;
		height: auto
	}
	
	[data-dpr="2"] .item-empty img {
		margin-bottom: 24px
	}
	
	[data-dpr="3"] .item-empty img {
		margin-bottom: 36px
	}
	
	[data-dpr="2"] .item-empty img {
		width: 280px
	}
	
	[data-dpr="3"] .item-empty img {
		width: 420px
	}
	
	.item-empty .b-title {
		font-size: 16px;
		color: #333;
		margin-bottom: .7rem
	}
	
	[data-dpr="2"] .item-empty .b-title {
		font-size: 32px
	}
	
	[data-dpr="3"] .item-empty .b-title {
		font-size: 48px
	}
	
	.item-empty a.btn {
		display: inline-block;
		width: 138px;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		color: #ff464e;
		border: 1px solid currentColor;
		text-align: center
	}
	
	[data-dpr="2"] .item-empty a.btn {
		width: 276px
	}
	
	[data-dpr="3"] .item-empty a.btn {
		width: 414px
	}
	
	[data-dpr="2"] .item-empty a.btn {
		height: 80px
	}
	
	[data-dpr="3"] .item-empty a.btn {
		height: 120px
	}
	
	[data-dpr="2"] .item-empty a.btn {
		line-height: 80px
	}
	
	[data-dpr="3"] .item-empty a.btn {
		line-height: 120px
	}
	
	[data-dpr="2"] .item-empty a.btn {
		font-size: 30px
	}
	
	[data-dpr="3"] .item-empty a.btn {
		font-size: 45px
	}
</style>