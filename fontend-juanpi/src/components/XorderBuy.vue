<template>
	<div id="orderlist" page="1" ordertype="1" orderperiod="" hasnext="1" style="min-height:480px;">
		<div class="order-detail my-order" _payentrance="1">
			<a href="https://m.juanpi.com/pay/detail?orderId=3756283015416639151">
				<div class="order-state clear">
					<span class="time fl">
                            支付倒计时：<em style="display: inline;">29分3秒</em>                        
					</span>
					<span class="state   fr">待付款</span>
				</div>
			</a>
			<ul class="bag-list">
				<li>
					<a class="box orderlist-box clear" href="https://m.juanpi.com/pay/detail?orderId=3756283015416639151">

						<div class="pic fl">
							<img src="https://goods4.juancdn.com/goods/181027/7/e/5bd40022b6f8ea17d013b50e_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/80!/format/jpg">
						</div>
						<div class="ob-info">
							<div class="obi-first">
								轻薄外套棉袄羽绒棉服 </div>
							<div class="obi-second">
								3XL&nbsp; 黑色 </div>
							<div class="obi-third">

								<p class="qitiantuihuo">7天退货</p>
							</div>
						</div>
						<div class="ob-price">
							<p class="current">￥99.00</p>
							<p class="goods-num">×1</p>
						</div>
					</a>
				</li>
			</ul>
			<a href="https://m.juanpi.com/pay/detail?orderId=3756283015416639151">
				<p class="go_see">
					<span class="pay-all fl">实付款:<i>￥</i><em>99.00</em></span>
					<span class="iconfont icon-liebiaojiantou"></span>
					<span class="fr num" href="javascript:;">共1件</span>
				</p>
			</a>
			<div class="pay-detail order-total-box">
				<a href="javascript:;" class="go-pay go-pay-btn fr bc1" >去付款</a>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style scoped>
.order-detail-btn {
	display: block;
	padding: 2px 5px;
	text-align: center;
	font-size: 12px;
	border: 1px solid #ff464e;
	color: #ff464e
}

[data-dpr="2"] .order-detail-btn {
	padding-left: 10px
}

[data-dpr="3"] .order-detail-btn {
	padding-left: 15px
}

[data-dpr="2"] .order-detail-btn {
	padding-right: 10px
}

[data-dpr="3"] .order-detail-btn {
	padding-right: 15px
}

[data-dpr="2"] .order-detail-btn {
	padding-top: 4px
}

[data-dpr="3"] .order-detail-btn {
	padding-top: 6px
}

[data-dpr="2"] .order-detail-btn {
	padding-bottom: 4px
}

[data-dpr="3"] .order-detail-btn {
	padding-bottom: 6px
}

[data-dpr="2"] .order-detail-btn {
	font-size: 24px
}

[data-dpr="3"] .order-detail-btn {
	font-size: 36px
}
.order-detail-box {
	padding-bottom: 18%
}

.order-detail-box .order-status {
	padding: 4%;
	height: auto;
	overflow: hidden;
	background: #eff6f9
}

.order-status .ors-text {
	font-size: 18px;
	color: #333;
	margin-left: 12%
}

[data-dpr="2"] .order-status .ors-text {
	font-size: 36px
}

[data-dpr="3"] .order-status .ors-text {
	font-size: 54px
}

.order-status .ors-try-text,
.order-status .ors-wait-do {
	font-size: 18px;
	color: #333;
	margin-left: 6%
}

[data-dpr="2"] .order-status .ors-try-text,
[data-dpr="2"] .order-status .ors-wait-do {
	font-size: 36px
}

[data-dpr="3"] .order-status .ors-try-text,
[data-dpr="3"] .order-status .ors-wait-do {
	font-size: 54px
}

.order-status .ors-close {
	font-size: 18px
}

[data-dpr="2"] .order-status .ors-close {
	font-size: 36px
}

[data-dpr="3"] .order-status .ors-close {
	font-size: 54px
}

.order-status .ors-text {
	line-height: 75px
}

[data-dpr="2"] .order-status .ors-text {
	line-height: 150px
}

[data-dpr="3"] .order-status .ors-text {
	line-height: 225px
}

.order-status .ors-try-text,
.order-status .ors-wait-do {
	margin-top: 25px
}

[data-dpr="2"] .order-status .ors-try-text,
[data-dpr="2"] .order-status .ors-wait-do {
	margin-top: 50px
}

[data-dpr="3"] .order-status .ors-try-text,
[data-dpr="3"] .order-status .ors-wait-do {
	margin-top: 75px
}

.order-status .ors-try-text span,
.order-status .ors-wait-do span {
	font-size: 12px
}

[data-dpr="2"] .order-status .ors-try-text span,
[data-dpr="2"] .order-status .ors-wait-do span {
	font-size: 24px
}

[data-dpr="3"] .order-status .ors-try-text span,
[data-dpr="3"] .order-status .ors-wait-do span {
	font-size: 36px
}

.order-status .ors-try-text span em {
	color: #ff464e;
	display: none
}

.order-status .ors-wait-amount {
	color: #ff464e;
	text-align: center;
	font-size: 18px
}

[data-dpr="2"] .order-status .ors-wait-amount {
	font-size: 36px
}

[data-dpr="3"] .order-status .ors-wait-amount {
	font-size: 54px
}

.order-status .ors-close-reason,
.order-status .ors-wait-time {
	color: #999;
	text-align: center;
	font-size: 14px;
	margin-top: 5px
}

[data-dpr="2"] .order-status .ors-close-reason,
[data-dpr="2"] .order-status .ors-wait-time {
	font-size: 28px
}

[data-dpr="3"] .order-status .ors-close-reason,
[data-dpr="3"] .order-status .ors-wait-time {
	font-size: 42px
}

[data-dpr="2"] .order-status .ors-close-reason,
[data-dpr="2"] .order-status .ors-wait-time {
	margin-top: 10px
}

[data-dpr="3"] .order-status .ors-close-reason,
[data-dpr="3"] .order-status .ors-wait-time {
	margin-top: 15px
}

.order-status .ors-wait-time span {
	color: #333
}

.order-status .ors-close {
	text-align: center;
	color: #333
}

.stockUpTxt {
	position: relative;
	padding: 7px 35px 7px 52px;
	font-size: 12px;
	color: #4990e2;
	background: #e2eff4;
	white-space: normal;
	word-wrap: break-word
}

.stockUpTxt .arrowUp {
	width: 0;
	height: 0;
	border-left: 14px solid transparent;
	border-right: 14px solid transparent;
	border-bottom: 14px solid #e2eff4;
	position: absolute;
	top: -14px;
	left: 52px
}

[data-dpr="2"] .stockUpTxt .arrowUp {
	left: 104px
}

[data-dpr="3"] .stockUpTxt .arrowUp {
	left: 156px
}

[data-dpr="2"] .stockUpTxt {
	padding-top: 14px
}

[data-dpr="3"] .stockUpTxt {
	padding-top: 21px
}

[data-dpr="2"] .stockUpTxt {
	padding-bottom: 14px
}

[data-dpr="3"] .stockUpTxt {
	padding-bottom: 21px
}

[data-dpr="2"] .stockUpTxt {
	padding-left: 104px
}

[data-dpr="3"] .stockUpTxt {
	padding-left: 156px
}

[data-dpr="2"] .stockUpTxt {
	padding-right: 70px
}

[data-dpr="3"] .stockUpTxt {
	padding-right: 105px
}

[data-dpr="2"] .stockUpTxt {
	font-size: 24px
}

[data-dpr="3"] .stockUpTxt {
	font-size: 36px
}

.abnormal-order {
	padding-right: 12px;
	padding-left: 12px
}

[data-dpr="2"] .abnormal-order {
	padding-right: 24px
}

[data-dpr="3"] .abnormal-order {
	padding-right: 36px
}

[data-dpr="2"] .abnormal-order {
	padding-left: 24px
}

[data-dpr="3"] .abnormal-order {
	padding-left: 36px
}

.abnormal-order p {
	font-size: 14px;
	margin-top: 7px
}

[data-dpr="2"] .abnormal-order p {
	font-size: 28px
}

[data-dpr="3"] .abnormal-order p {
	font-size: 42px
}

[data-dpr="2"] .abnormal-order p {
	margin-top: 14px
}

[data-dpr="3"] .abnormal-order p {
	margin-top: 21px
}

.abnormal-order .as-title,
.abnormal-order span {
	color: #ff464e
}

.abnormal-order .as-description {
	color: #999;
	font-size: 12px;
	margin-bottom: 7px
}

[data-dpr="2"] .abnormal-order .as-description {
	font-size: 24px
}

[data-dpr="3"] .abnormal-order .as-description {
	font-size: 36px
}

[data-dpr="2"] .abnormal-order .as-description {
	margin-bottom: 14px
}

[data-dpr="3"] .abnormal-order .as-description {
	margin-bottom: 21px
}

.order-detail-box .order-status img {
	display: block;
	height: 75px
}

[data-dpr="2"] .order-detail-box .order-status img {
	height: 150px
}

[data-dpr="3"] .order-detail-box .order-status img {
	height: 225px
}

.order-detail-box .order-process {
	position: relative;
	height: auto;
	overflow: hidden;
	background-color: #fff;
	padding: 0 4%
}

.order-detail-box .order-process .icon-wuliu {
	content: "";
	position: absolute;
	font-size: 20px;
	top: 18px
}

[data-dpr="2"] .order-detail-box .order-process .icon-wuliu {
	font-size: 40px
}

[data-dpr="3"] .order-detail-box .order-process .icon-wuliu {
	font-size: 60px
}

[data-dpr="2"] .order-detail-box .order-process .icon-wuliu {
	top: 36px
}

[data-dpr="3"] .order-detail-box .order-process .icon-wuliu {
	top: 54px
}

.order-process a {
	display: block;
	padding-top: 18px;
	padding-bottom: 10px;
	font-size: 14px;
	box-sizing: border-box;
	border-top: 1px solid #ebebeb
}

[data-dpr="2"] .order-process a {
	padding-top: 36px
}

[data-dpr="3"] .order-process a {
	padding-top: 54px
}

[data-dpr="2"] .order-process a {
	padding-bottom: 20px
}

[data-dpr="3"] .order-process a {
	padding-bottom: 30px
}

[data-dpr="2"] .order-process a {
	font-size: 28px
}

[data-dpr="3"] .order-process a {
	font-size: 42px
}

.order-process a .icon-liebiaojiantou {
	content: "";
	position: absolute;
	right: 0;
	top: 50%;
	font-size: 10px
}

[data-dpr="2"] .order-process a .icon-liebiaojiantou {
	font-size: 20px
}

[data-dpr="3"] .order-process a .icon-liebiaojiantou {
	font-size: 30px
}

.order-process p {
	margin-bottom: 5px
}

[data-dpr="2"] .order-process p {
	margin-bottom: 10px
}

[data-dpr="3"] .order-process p {
	margin-bottom: 15px
}

.order-process a.other-more {
	padding: 0;
	border: 0 none
}

.order-process a.other-more .opb-descrption {
	padding-top: 14px;
	padding-bottom: 14px;
	border-top: 1px solid #ebebeb
}

[data-dpr="2"] .order-process a.other-more .opb-descrption {
	padding-top: 28px
}

[data-dpr="3"] .order-process a.other-more .opb-descrption {
	padding-top: 42px
}

[data-dpr="2"] .order-process a.other-more .opb-descrption {
	padding-bottom: 28px
}

[data-dpr="3"] .order-process a.other-more .opb-descrption {
	padding-bottom: 42px
}

.order-process a.other-more p {
	margin: 0
}

.order-process .opb-descrption {
	margin-left: 38px;
	padding-right: 4%
}

[data-dpr="2"] .order-process .opb-descrption {
	margin-left: 75px
}

[data-dpr="3"] .order-process .opb-descrption {
	margin-left: 113px
}

.order-process .opb-icon img {
	display: block;
	width: 24px;
	margin-top: 65%
}

[data-dpr="2"] .order-process .opb-icon img {
	width: 48px
}

[data-dpr="3"] .order-process .opb-icon img {
	width: 72px
}

.order-process .opbd-time {
	font-size: 12px;
	color: #bbb
}

[data-dpr="2"] .order-process .opbd-time {
	font-size: 24px
}

[data-dpr="3"] .order-process .opbd-time {
	font-size: 36px
}

.order-detail-box .order-address {
	background-color: #fff;
	margin-top: 10px;
	padding: 4%;
	font-size: 14px;
	position: relative
}

[data-dpr="2"] .order-detail-box .order-address {
	margin-top: 20px
}

[data-dpr="3"] .order-detail-box .order-address {
	margin-top: 30px
}

[data-dpr="2"] .order-detail-box .order-address {
	font-size: 28px
}

[data-dpr="3"] .order-detail-box .order-address {
	font-size: 42px
}

.order-detail-box .order-address .edit-address {
	padding-right: 4%;
	line-height: 24px;
	font-size: 12px
}

[data-dpr="2"] .order-detail-box .order-address .edit-address {
	line-height: 48px
}

[data-dpr="3"] .order-detail-box .order-address .edit-address {
	line-height: 72px
}

[data-dpr="2"] .order-detail-box .order-address .edit-address {
	font-size: 24px
}

[data-dpr="3"] .order-detail-box .order-address .edit-address {
	font-size: 36px
}

.order-detail-box .order-address .edit-address .icon-liebiaojiantou {
	right: 0;
	font-size: 10px
}

[data-dpr="2"] .order-detail-box .order-address .edit-address .icon-liebiaojiantou {
	font-size: 20px
}

[data-dpr="3"] .order-detail-box .order-address .edit-address .icon-liebiaojiantou {
	font-size: 30px
}

.order-detail-box .order-address .icon-dingwei {
	content: "";
	position: absolute;
	top: 17%;
	font-size: 24px
}

[data-dpr="2"] .order-detail-box .order-address .icon-dingwei {
	font-size: 48px
}

[data-dpr="3"] .order-detail-box .order-address .icon-dingwei {
	font-size: 72px
}

.order-detail-box .order-address .oa-tel {
	margin-left: 38px;
	color: #333
}

[data-dpr="2"] .order-detail-box .order-address .oa-tel {
	margin-left: 75px
}

[data-dpr="3"] .order-detail-box .order-address .oa-tel {
	margin-left: 113px
}

.order-detail-box .order-address .oa-text {
	overflow: hidden;
	margin-left: 38px;
	margin-top: 10px;
	color: #333
}

[data-dpr="2"] .order-detail-box .order-address .oa-text {
	margin-left: 75px
}

[data-dpr="3"] .order-detail-box .order-address .oa-text {
	margin-left: 113px
}

[data-dpr="2"] .order-detail-box .order-address .oa-text {
	margin-top: 20px
}

[data-dpr="3"] .order-detail-box .order-address .oa-text {
	margin-top: 30px
}

.order-detail-box .order-shopping {
	background-color: #fff;
	margin-top: 10px
}

[data-dpr="2"] .order-detail-box .order-shopping {
	margin-top: 20px
}

[data-dpr="3"] .order-detail-box .order-shopping {
	margin-top: 30px
}

.order-detail-box .order-shopping .bag-list,
[data-dpr="2"] .order-detail-box .order-shopping .bag-list,
[data-dpr="3"] .order-detail-box .order-shopping .bag-list {
	margin-top: 0
}

.order-detail-box .order-shopping .bag-list li {
	margin: 0;
	background: #fff
}

.order-detail-box .order-shopping .bag-list li .orderlist-box {
	padding: 14px;
	background: #fafafa
}

[data-dpr="2"] .order-detail-box .order-shopping .bag-list li .orderlist-box {
	padding: 28px
}

[data-dpr="3"] .order-detail-box .order-shopping .bag-list li .orderlist-box {
	padding: 42px
}

.order-detail-box .order-shopping .bag-list .order-current-btn {
	font-size: 12px;
	margin-bottom: 8px;
	margin-right: 14px;
	margin-top: 0
}

[data-dpr="2"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	font-size: 24px
}

[data-dpr="3"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	font-size: 36px
}

[data-dpr="2"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	margin-bottom: 16px
}

[data-dpr="3"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	margin-bottom: 24px
}

[data-dpr="2"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	margin-right: 28px
}

[data-dpr="3"] .order-detail-box .order-shopping .bag-list .order-current-btn {
	margin-right: 42px
}

.order-detail-box .mz_juan {
	color: #666;
	font-size: 14px;
	padding-top: 14px;
	padding-left: 14px;
	padding-right: 14px;
	background: #fff
}

[data-dpr="2"] .order-detail-box .mz_juan {
	font-size: 28px
}

[data-dpr="3"] .order-detail-box .mz_juan {
	font-size: 42px
}

[data-dpr="2"] .order-detail-box .mz_juan {
	padding-top: 28px
}

[data-dpr="3"] .order-detail-box .mz_juan {
	padding-top: 42px
}

[data-dpr="2"] .order-detail-box .mz_juan {
	padding-left: 28px
}

[data-dpr="3"] .order-detail-box .mz_juan {
	padding-left: 42px
}

[data-dpr="2"] .order-detail-box .mz_juan {
	padding-right: 28px
}

[data-dpr="3"] .order-detail-box .mz_juan {
	padding-right: 42px
}

.order-detail-box .mz_juan .mz_logo_font {
	color: #ff464e;
	display: inline-block;
	border: 1px solid #ff464e;
	padding-left: 3px;
	padding-right: 3px;
	margin-right: 3px;
	line-height: 1
}

[data-dpr="2"] .order-detail-box .mz_juan .mz_logo_font {
	padding-left: 5px
}

[data-dpr="3"] .order-detail-box .mz_juan .mz_logo_font {
	padding-left: 8px
}

[data-dpr="2"] .order-detail-box .mz_juan .mz_logo_font {
	padding-right: 5px
}

[data-dpr="3"] .order-detail-box .mz_juan .mz_logo_font {
	padding-right: 8px
}

[data-dpr="2"] .order-detail-box .mz_juan .mz_logo_font {
	margin-right: 5px
}

[data-dpr="3"] .order-detail-box .mz_juan .mz_logo_font {
	margin-right: 8px
}

.order-detail-box .order-shopping .seller {
	padding: 4%;
	padding-left: 8px;
	position: relative;
	font-size: 14px;
	margin-left: 12%
}

[data-dpr="2"] .order-detail-box .order-shopping .seller {
	padding-left: 16px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller {
	padding-left: 24px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller {
	font-size: 28px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller {
	font-size: 42px
}

.order-detail-box .order-shopping .seller span:first-child {
	color: #333
}

.order-detail-box .order-shopping .seller .imgiconBox {
	display: inline-block;
	position: absolute;
	left: -8%;
	top: 25%;
	font-size: 22px;
	width: 22px;
	height: 22px;
	color: #666
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .imgiconBox {
	font-size: 44px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .imgiconBox {
	font-size: 66px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .imgiconBox {
	width: 44px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .imgiconBox {
	width: 66px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .imgiconBox {
	height: 44px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .imgiconBox {
	height: 66px
}

.order-detail-box .order-shopping .seller .imgiconBox.icon-liebiaojiantou {
	font-size: 11px;
	margin-left: 5px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .imgiconBox.icon-liebiaojiantou {
	font-size: 22px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .imgiconBox.icon-liebiaojiantou {
	font-size: 33px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .imgiconBox.icon-liebiaojiantou {
	margin-left: 10px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .imgiconBox.icon-liebiaojiantou {
	margin-left: 15px
}

.order-detail-box .order-shopping .seller .imgiconBox img {
	display: block;
	width: 100%;
	height: 100%
}

.order-detail-box .order-shopping .seller .icon-dianpu {
	content: "";
	position: absolute;
	left: -8%;
	top: 25%;
	font-size: 22px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .icon-dianpu {
	font-size: 44px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .icon-dianpu {
	font-size: 66px
}

.order-detail-box .order-shopping .seller .connect {
	display: inline-block;
	position: absolute;
	right: 5%;
	top: 25%;
	height: 16px;
	line-height: 16px;
	font-size: 12px;
	color: #4a90e2
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .connect {
	height: 32px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .connect {
	height: 48px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .connect {
	line-height: 32px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .connect {
	line-height: 48px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .connect {
	font-size: 24px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .connect {
	font-size: 36px
}

.order-detail-box .order-shopping .seller .connect span {
	color: #4a90e2;
	vertical-align: middle
}

.order-detail-box .order-shopping .seller .connect .iconfont {
	margin-right: 2px;
	font-size: 22px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .connect .iconfont {
	margin-right: 4px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .connect .iconfont {
	margin-right: 6px
}

[data-dpr="2"] .order-detail-box .order-shopping .seller .connect .iconfont {
	font-size: 44px
}

[data-dpr="3"] .order-detail-box .order-shopping .seller .connect .iconfont {
	font-size: 66px
}

.order-detail-box .order-other-info {
	font-size: 13px;
	color: #999;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #fff;
	padding: 4%
}

[data-dpr="2"] .order-detail-box .order-other-info {
	font-size: 26px
}

[data-dpr="3"] .order-detail-box .order-other-info {
	font-size: 39px
}

[data-dpr="2"] .order-detail-box .order-other-info {
	margin-top: 20px
}

[data-dpr="3"] .order-detail-box .order-other-info {
	margin-top: 30px
}

[data-dpr="2"] .order-detail-box .order-other-info {
	margin-bottom: 20px
}

[data-dpr="3"] .order-detail-box .order-other-info {
	margin-bottom: 30px
}

.order-detail-box .order-other-info p {
	margin-top: 15px
}

[data-dpr="2"] .order-detail-box .order-other-info p {
	margin-top: 30px
}

[data-dpr="3"] .order-detail-box .order-other-info p {
	margin-top: 45px
}

.order-detail-box .order-other-info p:first-child,
.order-detail-box .order_total p:first-child,
[data-dpr="2"] .order-detail-box .order-other-info p:first-child,
[data-dpr="2"] .order-detail-box .order_total p:first-child,
[data-dpr="3"] .order-detail-box .order-other-info p:first-child,
[data-dpr="3"] .order-detail-box .order_total p:first-child {
	margin-top: 0
}

.order_total {
	background: #fff;
	font-size: 14px
}

[data-dpr="2"] .order_total {
	font-size: 28px
}

[data-dpr="3"] .order_total {
	font-size: 42px
}

.order_total p {
	padding: 5px 14px;
	color: #333
}

[data-dpr="2"] .order_total p {
	padding-left: 28px
}

[data-dpr="3"] .order_total p {
	padding-left: 42px
}

[data-dpr="2"] .order_total p {
	padding-right: 28px
}

[data-dpr="3"] .order_total p {
	padding-right: 42px
}

[data-dpr="2"] .order_total p {
	padding-top: 10px
}

[data-dpr="3"] .order_total p {
	padding-top: 15px
}

[data-dpr="2"] .order_total p {
	padding-bottom: 10px
}

[data-dpr="3"] .order_total p {
	padding-bottom: 15px
}

.order_total p .sp1 {
	float: left
}

.order_total p .sp1 i {
	display: inline-block;
	margin-left: .3rem;
	padding: 0 .1rem;
	font-size: 10px;
	line-height: 1;
	border: 1px solid #ff464e;
	color: #ff464e
}

[data-dpr="2"] .order_total p .sp1 i {
	font-size: 20px
}

[data-dpr="3"] .order_total p .sp1 i {
	font-size: 30px
}

.order_total p .sp2 {
	float: right
}

.order_total p .org {
	color: #ff464e
}

.badge-bw {
	display: inline-block;
	width: 12px;
	height: 12px;
	/*background: transparent url(../../../images_v1/icon/info-gray.png?161222) no-repeat;*/
	background-size: contain
}

[data-dpr="2"] .badge-bw {
	width: 24px
}

[data-dpr="3"] .badge-bw {
	width: 36px
}

[data-dpr="2"] .badge-bw {
	height: 24px
}

[data-dpr="3"] .badge-bw {
	height: 36px
}

.badge-bw:hover,
.badge-bw:visited {
	text-decoration: none
}

.order_total .fee-desc {
	margin-left: 4px;
	margin-top: 2px
}

[data-dpr="2"] .order_total .fee-desc {
	margin-left: 8px
}

[data-dpr="3"] .order_total .fee-desc {
	margin-left: 12px
}

[data-dpr="2"] .order_total .fee-desc {
	margin-top: 4px
}

[data-dpr="3"] .order_total .fee-desc {
	margin-top: 6px
}

.order-detail-box .bag-tips {
	font-size: 10px;
	color: #999;
	text-align: left;
	padding: 4%;
	line-height: 1.8
}

[data-dpr="2"] .order-detail-box .bag-tips {
	font-size: 20px
}

[data-dpr="3"] .order-detail-box .bag-tips {
	font-size: 30px
}

.order-detail-box .bag-tips a {
	color: #ff464e;
	font-size: 12px;
	text-decoration: underline
}

[data-dpr="2"] .order-detail-box .bag-tips a {
	font-size: 24px
}

[data-dpr="3"] .order-detail-box .bag-tips a {
	font-size: 36px
}

.order-detail-box .big-order-btn {
	margin-top: 20px
}

[data-dpr="2"] .order-detail-box .big-order-btn {
	margin-top: 40px
}

[data-dpr="3"] .order-detail-box .big-order-btn {
	margin-top: 60px
}

</style>