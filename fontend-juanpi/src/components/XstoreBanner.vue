<template>
	<div class="brand-banner">
                <div class="logo_show clear" style="background-image: url('https://s2.juancdn.com/bao/170418/c/c/58f5bacba43d1f277576cfcf_750x216.png');background-repeat: no-repeat;background-size: 100% 100%;">
                    <div class="brand_logo fl">
                        <img src="https://goods7.juancdn.com/bao/170612/c/e/593e317fad0a49dd458b45cb_180x90.png?iopcmd=convert&amp;Q=88&amp;dst=png">
                    </div>
                    <div class="fl brand_det">
                        <div class="brand_name">金丝兔专营店</div>
                                                <a href="/license/index/seller/379865960" class="brand_qua">资质</a>
                    </div>
                    <div class="brand-collect">
                        <div class="js-collect bc" data-bc="[&quot;trackEvent&quot;, &quot;temai&quot;, &quot;click_business_collect&quot;,&quot;businessid&quot;,&quot;379865960&quot;]">
                            <span class="brand-collect__icon">
                                <span class="iconfont icon-shoucang icon-jiarushoucang"></span>
                            </span>
                            <p>收藏店铺</p>
                        </div>
                    </div>

                </div>
                <div class="coupon_new_top" style="display: none;">
                    <div class="coupon_new">
                        <table>
                            <tbody class="coupon_new_body">
                            <tr>
                                <td class="coupon_cash">
                                    <span>￥</span>
                                    <span class="total_cash"></span>
                                </td>
                                <td class="coupon_des">
                                    <span class="coupon_List"></span>
                                    <span class="coupon_use">仅限当前店铺使用</span>
                                </td>
                                <td class="get_coupon">
                                    <span class="get_cash">立即领取</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
</template>

<script>
</script>

<style scoped>
	.brand-banner img {
	width: 100%
}

.brand-banner .logo_show {
	position: relative;
	height: 45px;
	padding-top: 49px;
	padding-bottom: 14px;
	overflow: hidden
}

[data-dpr="2"] .brand-banner .logo_show {
	height: 90px
}

[data-dpr="3"] .brand-banner .logo_show {
	height: 135px
}

[data-dpr="2"] .brand-banner .logo_show {
	padding-top: 98px
}

[data-dpr="3"] .brand-banner .logo_show {
	padding-top: 147px
}

[data-dpr="2"] .brand-banner .logo_show {
	padding-bottom: 28px
}

[data-dpr="3"] .brand-banner .logo_show {
	padding-bottom: 42px
}

.brand-banner .logo_show .brand_logo {
	width: 45px;
	height: 45px;
	margin-left: 14px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	background-color: #fff
}

[data-dpr="2"] .brand-banner .logo_show .brand_logo {
	width: 90px
}

[data-dpr="3"] .brand-banner .logo_show .brand_logo {
	width: 135px
}

[data-dpr="2"] .brand-banner .logo_show .brand_logo {
	height: 90px
}

[data-dpr="3"] .brand-banner .logo_show .brand_logo {
	height: 135px
}

[data-dpr="2"] .brand-banner .logo_show .brand_logo {
	margin-left: 28px
}

[data-dpr="3"] .brand-banner .logo_show .brand_logo {
	margin-left: 42px
}

.brand-banner .logo_show .brand_det {
	margin-left: 10px;
	color: #fff;
	font-size: 12px;
	width: 40%
}

[data-dpr="2"] .brand-banner .logo_show .brand_det {
	margin-left: 20px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det {
	margin-left: 30px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det {
	font-size: 24px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det {
	font-size: 36px
}

.brand-banner .logo_show .brand_det .brand_name {
	font-size: 16px;
	margin-bottom: 2px;
	color: #fff;
	height: 26px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_name {
	font-size: 32px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_name {
	font-size: 48px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_name {
	margin-bottom: 4px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_name {
	margin-bottom: 6px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_name {
	height: 52px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_name {
	height: 78px
}

.brand-banner .logo_show .brand_det .brand_del {
	color: #fff;
	font-size: 10px;
	background-color: #ff464e;
	margin-right: 8px;
	padding-left: 2px;
	padding-right: 2px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_del {
	font-size: 20px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_del {
	font-size: 30px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_del {
	margin-right: 16px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_del {
	margin-right: 24px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_del {
	padding-left: 4px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_del {
	padding-left: 6px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_del {
	padding-right: 4px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_del {
	padding-right: 6px
}

.brand-banner .logo_show .brand_det .brand_qua {
	color: #c5e0ed;
	font-size: 10px;
	border: 1px solid #c5e0ed;
	padding-left: 2px;
	padding-right: 2px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_qua {
	font-size: 20px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_qua {
	font-size: 30px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_qua {
	padding-left: 4px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_qua {
	padding-left: 6px
}

[data-dpr="2"] .brand-banner .logo_show .brand_det .brand_qua {
	padding-right: 4px
}

[data-dpr="3"] .brand-banner .logo_show .brand_det .brand_qua {
	padding-right: 6px
}

.brand-banner .brand-collect {
	right: 14px;
	font-size: 10px;
	position: absolute;
	top: 49px;
	color: #fff;
	text-align: center
}

[data-dpr="2"] .brand-banner .brand-collect {
	right: 28px
}

[data-dpr="3"] .brand-banner .brand-collect {
	right: 42px
}

[data-dpr="2"] .brand-banner .brand-collect {
	font-size: 20px
}

[data-dpr="3"] .brand-banner .brand-collect {
	font-size: 30px
}

[data-dpr="2"] .brand-banner .brand-collect {
	top: 98px
}

[data-dpr="3"] .brand-banner .brand-collect {
	top: 147px
}

.brand-banner .brand-collect .brand-collect__icon {
	display: inline-block;
	width: 24px;
	height: 24px
}

[data-dpr="2"] .brand-banner .brand-collect .brand-collect__icon {
	width: 48px
}

[data-dpr="3"] .brand-banner .brand-collect .brand-collect__icon {
	width: 72px
}

[data-dpr="2"] .brand-banner .brand-collect .brand-collect__icon {
	height: 48px
}

[data-dpr="3"] .brand-banner .brand-collect .brand-collect__icon {
	height: 72px
}

.brand-banner .brand-collect .iconfont {
	font-size: 24px
}

[data-dpr="2"] .brand-banner .brand-collect .iconfont {
	font-size: 48px
}

[data-dpr="3"] .brand-banner .brand-collect .iconfont {
	font-size: 72px
}

.brand-banner .brand-collect .collect {
	color: #ff464e
}

</style>