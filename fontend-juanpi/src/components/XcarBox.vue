<template>
	<div class="ajaxHtml">
		<div class="item_cart act_efficacy">
			<div class="item_head_box">
				<div class="item_head">
					<div class="head_radio"><span class="iconfont icon-yixuanzhong"></span></div>
					<div class="head_type">
						<a class="bc" data-bc="[&quot;trackEvent&quot;, &quot;temai&quot;, &quot;click_temai_shoppingbag_store&quot;, &quot;businessid&quot;,&quot;380656713&quot;]" href="//m.juanpi.com/store/380656713"><span class="imgiconBox"><img src="http://s2.juancdn.com/bao/170615/2/d/594233d5a43d1f45d646cb90_72x72.png"></span><span>凤鸣祥时尚运动小店</span><span class="iconfont icon-liebiaojiantou"></span></a>
					</div>
					<div class="head_action"></div>
				</div>
			</div>
			<div class="item_body">
				<div class="item_group">

					<ul class="good_list">
						<li class="good_item" id="goodsId95145147" data-goodsid="95145147" data-skuid="1369698341">
							<div class="good_radio">
								<span class="iconfont icon-yixuanzhong"></span>
							</div>
							<a href="https://web.juanpi.com/pintuan/shop/95145147" class="good_info clear">
								<div class="pic">
									<img src="https://goods2.juancdn.com/goods/181027/3/0/5bd40023b6f8ea106b1e9a05_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg">
								</div>
								<div class="info_box">
									<div class="info_first clear">
										<p class="title">
											轻薄外套棉袄羽绒棉服
										</p>
									</div>
									<div class="info_second clear">
										<p class="type" data-sid="1369698341" data-fid="101" data-zid="2" data-gid="95145147" data-num="1">灰色 M<span class="iconfont icon-liebiaojiantou"></span></p>
									</div>

									<div class="info_third clear">

										<div style="float:left;width:100%;">
											<p class="price fr" style="color:#999999"></p>
										</div>

										<p class="price fl">
											<!-- <span class="showPrice">
                                        <span class="cur"><i>￥</i>99</span> -->
											<!-- <span class="old">￥199</span> -->
											<span style="color:#FF464E;" class="vip-price">¥99</span><span style="text-decoration:line-through;color:#999999;" class="vip-price">¥199</span>
											<!-- </span> -->
										</p>
										<p class="num fr">
											<span class="changeNum">
                                        <i class="decrease no">-</i>
                                        <input class="amount" type="text" name="amount" value="1" data-totalnum="1" data-moqinfo="1" readonly="true">
                                        <i class="increase ">+</i>
                                    </span>
											<span class="showNum">
                                          X1
                                      </span>
										</p>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="member-bottom member-hidden member-bottom-nomenu">
			<span style="display: -webkit-flex;-webkit-align-items: center;"> <img style="margin-right:.2rem" src="">
                
                </span>
			<span class="member-selected member-un"></span>

		</div>
		<div class="bag-total">
			<div class="sel-all">
				<span class="iconfont icon-yixuanzhong"></span>全选
			</div>
			<div class="bag-money">
				<p class="count"><span class="zje">合计<em class="p" id="myBagTotal">￥99.00</em></span><br><span class="s">总额:<em id="save">￥99.00</em>&nbsp;立减:<em id="save">0.00</em></span></p>
			</div>
			<a href="#" class="go_pay fr" @click="gopay()">去结算(1)</a>
			<a href="javascript:;" class="del_good hide fr">删除</a>
			<a href="javascript:;" class="move_good hide fr">移入收藏夹</a>
		</div>

	</div>
</template>

<script>
	export default {
	methods:{
			gopay(){
				this.$router.push({ name: "pay" });
			}
		}
	}
</script>

<style scoped>
	@charset "UTF-8";
	blockquote,
	body,
	button,
	code,
	dd,
	div,
	dl,
	dt,
	fieldset,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	input,
	legend,
	li,
	ol,
	p,
	pre,
	td,
	textarea,
	th,
	ul {
		margin: 0;
		padding: 0
	}
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	nav,
	section,
	summary {
		display: block
	}
	
	audio,
	canvas,
	progress,
	video {
		display: inline-block;
		vertical-align: baseline
	}
	
	html {
		font-size: 312.5%;
		-webkit-tap-highlight-color: transparent;
		-webkit-user-select: none
	}
	
	body {
		background-color: #f4f4f8;
		color: #666;
		height: 100%;
		font-family: PingFang-SC-Regular, Helvetica Neue, Helvetica, Droid Sans Fallback, microsoft yahei, sans-serif
	}
	
	body * {
		max-height: 9000rem
	}
	
	fieldset,
	img {
		border: 0
	}
	
	address,
	cite,
	dfn,
	em,
	i,
	var {
		font-style: normal
	}
	
	a {
		color: #666
	}
	
	a,
	a:active,
	a:hover {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
		text-decoration: none
	}
	
	:focus {
		outline: 0 none
	}
	
	dl,
	li,
	ol,
	ul {
		list-style: none
	}
	
	li,
	li:active,
	ul {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
	}
	
	input::-webkit-input-placeholder {
		color: #999
	}
	
	input:-moz-placeholder,
	input::-moz-placeholder {
		color: #999
	}
	
	input:-ms-input-placeholder {
		color: #999
	}
	
	input {
		-webkit-appearance: none
	}
	
	.clear {
		clear: both
	}
	
	.clear:after,
	.clear:before {
		clear: both;
		content: " ";
		display: block;
		font-size: 0;
		height: 0;
		visibility: hidden
	}
	
	.fl {
		float: left
	}
	
	.fr {
		float: right
	}
	
	.alert_fullbg {
		display: none;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 200;
		filter: alpha(opacity=50);
		opacity: .5;
		background-color: #000
	}
	
	.main {
		max-width: 16rem;
		min-width: 6.82667rem;
		position: relative
	}
	
	.app,
	.main {
		background: #f4f4f8;
		margin: 0 auto;
		width: 100%
	}
	
	.app {
		position: absolute
	}
	
	.top-menu {
		width: 100%;
		max-width: 16rem;
		min-width: 6.82667rem;
		background: #fff;
		line-height: 1
	}
	
	.top-menu.top-type1 {
		height: 49px
	}
	
	[data-dpr="2"] .top-menu.top-type1 {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type1 {
		height: 147px
	}
	
	.top-menu.top-type2 {
		height: 38px
	}
	
	[data-dpr="2"] .top-menu.top-type2 {
		height: 76px
	}
	
	[data-dpr="3"] .top-menu.top-type2 {
		height: 114px
	}
	
	.top-menu.top-type3 {
		height: 49px
	}
	
	[data-dpr="2"] .top-menu.top-type3 {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type3 {
		height: 147px
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
		min-width: 6.82667rem
	}
	
	.top-menu.top-type1 .top-menu-box {
		height: 49px
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box {
		height: 147px
	}
	
	.top-menu.top-type2 .top-menu-box {
		height: 38px
	}
	
	[data-dpr="2"] .top-menu.top-type2 .top-menu-box {
		height: 76px
	}
	
	[data-dpr="3"] .top-menu.top-type2 .top-menu-box {
		height: 114px
	}
	
	.top-menu.top-type3 .top-menu-box {
		height: 49px
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box {
		height: 147px
	}
	
	.top-menu .top-menu-box.fixed {
		position: fixed
	}
	
	.top-menu .top-menu-box nav {
		white-space: nowrap;
		overflow: auto;
		overflow-y: hidden
	}
	
	.top-menu.top-type1 .top-menu-box nav a {
		height: 49px;
		font-size: 12px;
		text-align: center;
		color: #333;
		display: inline-block;
		white-space: nowrap;
		width: 20%
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a {
		height: 147px
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a {
		font-size: 24px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a {
		font-size: 36px
	}
	
	.top-menu.top-type1 .top-menu-box nav a .bg-icon {
		width: 24px;
		height: 24px;
		margin: 0 auto;
		margin-top: 13px;
		margin-bottom: 13px;
		display: block
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		width: 48px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		width: 72px
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		height: 48px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		height: 72px
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		margin-top: 25px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		margin-top: 38px
	}
	
	[data-dpr="2"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		margin-bottom: 25px
	}
	
	[data-dpr="3"] .top-menu.top-type1 .top-menu-box nav a .bg-icon {
		margin-bottom: 38px
	}
	
	.top-menu.top-type2 .top-menu-box nav {
		background: #fff;
		height: 38px
	}
	
	[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav {
		height: 76px
	}
	
	[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav {
		height: 114px
	}
	
	.top-menu.top-type2 .top-menu-box nav a {
		line-height: 38px;
		height: 38px;
		display: inline-block;
		font-size: 14px;
		text-align: center;
		color: #333;
		white-space: nowrap;
		box-sizing: border-box;
		padding: 0 .21333rem;
		margin: 0 .29867rem;
		background: #fff
	}
	
	[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
		line-height: 76px
	}
	
	[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
		line-height: 114px
	}
	
	[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
		height: 76px
	}
	
	[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
		height: 114px
	}
	
	[data-dpr="2"] .top-menu.top-type2 .top-menu-box nav a {
		font-size: 28px
	}
	
	[data-dpr="3"] .top-menu.top-type2 .top-menu-box nav a {
		font-size: 42px
	}
	
	.top-menu.top-type3 .top-menu-box nav a {
		height: 49px;
		font-size: 12px;
		text-align: center;
		color: #333;
		display: inline-block;
		white-space: nowrap;
		width: 20%
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a {
		height: 98px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a {
		height: 147px
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a {
		font-size: 24px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a {
		font-size: 36px
	}
	
	.top-menu.top-type3 .top-menu-box nav a .bg-icon {
		width: 24px;
		height: 24px;
		margin: 0 auto;
		margin-top: 5px;
		margin-bottom: 5px;
		display: block
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		width: 48px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		width: 72px
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		height: 48px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		height: 72px
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		margin-top: 10px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		margin-top: 15px
	}
	
	[data-dpr="2"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		margin-bottom: 10px
	}
	
	[data-dpr="3"] .top-menu.top-type3 .top-menu-box nav a .bg-icon {
		margin-bottom: 15px
	}
	
	.bottom-menu {
		position: fixed;
		width: 100%;
		max-width: 16rem;
		min-width: 6.82667rem;
		line-height: 1;
		background-color: #fff;
		bottom: 0;
		z-index: 400;
		background-size: 100% 100%;
		border-top: 1px solid #ebebeb
	}
	
	.bottom-menu nav a {
		height: 49px;
		float: left;
		font-size: 10px;
		text-align: center;
		color: #333;
		display: block
	}
	
	[data-dpr="2"] .bottom-menu nav a {
		height: 98px
	}
	
	[data-dpr="3"] .bottom-menu nav a {
		height: 147px
	}
	
	[data-dpr="2"] .bottom-menu nav a {
		font-size: 20px
	}
	
	[data-dpr="3"] .bottom-menu nav a {
		font-size: 30px
	}
	
	.bottom-menu nav a.type1 .bg-icon {
		height: 100%;
		margin: 0 auto;
		display: block
	}
	
	.bottom-menu nav a.type2 {
		line-height: 49px
	}
	
	[data-dpr="2"] .bottom-menu nav a.type2 {
		line-height: 98px
	}
	
	[data-dpr="3"] .bottom-menu nav a.type2 {
		line-height: 147px
	}
	
	.bottom-menu nav a.type3 .bg-icon {
		width: 24px;
		height: 24px;
		margin: 0 auto;
		margin-top: 5px;
		margin-bottom: 5px;
		display: block
	}
	
	[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
		width: 48px
	}
	
	[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
		width: 72px
	}
	
	[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
		height: 48px
	}
	
	[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
		height: 72px
	}
	
	[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
		margin-top: 10px
	}
	
	[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
		margin-top: 15px
	}
	
	[data-dpr="2"] .bottom-menu nav a.type3 .bg-icon {
		margin-bottom: 10px
	}
	
	[data-dpr="3"] .bottom-menu nav a.type3 .bg-icon {
		margin-bottom: 15px
	}
	
	.more {
		margin-bottom: .46933rem
	}
	
	.bg-icon.all-img {
		height: 38px;
		vertical-align: bottom
	}
	
	[data-dpr="2"] .bg-icon.all-img {
		height: 76px
	}
	
	[data-dpr="3"] .bg-icon.all-img {
		height: 114px
	}
	
	@font-face {
		font-family: iconfont;
		src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss);
		src: url(/jpwebapp_v1/iconfont/iconfont.eot?t=14893730732761sss#iefix) format("embedded-opentype"), url(/jpwebapp_v1/iconfont/iconfont.woff?t=14893730732761sss) format("woff"), url(/jpwebapp_v1/iconfont/iconfont.ttf?t=14893730732761sss) format("truetype"), url(/jpwebapp_v1/iconfont/iconfont.svg?t=14893730732761sss#iconfont) format("svg")
	}
	
	.iconfont {
		font-family: iconfont!important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale
	}
	
	.icon-dingdan:before {
		content: "\e60a"
	}
	
	.icon-fanhui:before {
		content: "\e60b"
	}
	
	.icon-fenlei:before {
		content: "\e60c"
	}
	
	.icon-fenxiang:before {
		content: "\e60d"
	}
	
	.icon-gengduo:before {
		content: "\e60e"
	}
	
	.icon-gouwuche:before {
		content: "\e60f"
	}
	
	.icon-guanbi:before {
		content: "\e610"
	}
	
	.icon-xiaoxi:before {
		content: "\e611"
	}
	
	.icon-shoucang:before {
		content: "\e612"
	}
	
	.icon-zhuye:before {
		content: "\e613"
	}
	
	.icon-daifukuan:before {
		content: "\e614"
	}
	
	.icon-daishouhuo:before {
		content: "\e615"
	}
	
	.icon-daifahuo:before {
		content: "\e616"
	}
	
	.icon-dianpu:before {
		content: "\e617"
	}
	
	.icon-dingwei:before {
		content: "\e618"
	}
	
	.icon-shanchu:before {
		content: "\e619"
	}
	
	.icon-liebiaojiantou:before {
		content: "\e61a"
	}
	
	.icon-tianjia:before {
		content: "\e61b"
	}
	
	.icon-sousuofenlei:before {
		content: "\e61c"
	}
	
	.icon-tuikuanshouhou:before {
		content: "\e61d"
	}
	
	.icon-bianji:before {
		content: "\e61e"
	}
	
	.icon-wuliu:before {
		content: "\e61f"
	}
	
	.icon-yishoucang:before {
		content: "\e620"
	}
	
	.icon-yixuanzhong:before {
		content: "\e621"
	}
	
	.icon-weixuanzhong:before {
		content: "\e622"
	}
	
	.icon-daichengtuan:before {
		content: "\e623"
	}
	
	.icon-zhifaicon:before {
		content: "\e624"
	}
	
	.icon-yixuanzhong1:before {
		content: "\e625"
	}
	
	.icon-zhekou:before {
		content: "\e626"
	}
	
	.icon-kefu:before {
		content: "\e627"
	}
	
	.icon-biyan:before {
		content: "\e628"
	}
	
	.icon-zhengyan:before {
		content: "\e629"
	}
	
	.icon-sousuo:before {
		content: "\e62a"
	}
	
	.icon-shanchu_:before {
		content: "\e62b"
	}
	
	.icon-jianpan_shanchu:before {
		content: "\e62c"
	}
	
	.icon-dunpai:before {
		content: "\e62d"
	}
	
	.icon-jiageshengxu:before {
		content: "\e62e"
	}
	
	.icon-shaixuan:before {
		content: "\e62f"
	}
	
	.icon-jiagejiangxu:before {
		content: "\e630"
	}
	
	.icon-jiarushoucang:before {
		content: "\e631"
	}
	
	.icon-jiarugouwuche:before {
		content: "\e632"
	}
	
	.normal_loading {
		display: none;
		max-width: 16rem;
		min-width: 6.82667rem;
		position: fixed;
		text-align: center;
		top: 30%;
		width: 100%;
		z-index: 201
	}
	
	.normal_loading .box {
		background: #fff;
		border-radius: .34133rem;
		height: auto;
		margin: 0 auto;
		overflow: hidden;
		padding: 5% 8%;
		position: relative;
		width: 30%
	}
	
	.normal_loading .box.other {
		background: none
	}
	
	.normal_loading .box .txt {
		font-size: .512rem;
		margin-top: .512rem;
		color: #999
	}
	
	.normal_loading .box .loading {
		width: 100%;
		height: auto;
		position: relative;
		height: 3.2rem
	}
	
	.normal_loading .box .shade {
		background: #000;
		border-radius: 50%;
		height: .256rem;
		opacity: .1;
		width: 1.36533rem;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -.68267rem
	}
	
	.normal_loading .box .stars {
		position: absolute;
		top: .68267rem;
		left: 50%;
		margin-left: -.768rem
	}
	
	.normal_loading .box .loading.show .stars {
		animation: like_poof .7s linear infinite forwards
	}
	
	@keyframes like_poof {
		0% {
			top: 36px;
			transform: rotate(0deg)
		}
		25% {
			top: 0;
			transform: rotate(0deg)
		}
		50% {
			top: 0;
			transform: rotate(72deg)
		}
		75% {
			transform: rotate(72deg)
		}
		to {
			top: 36px;
			transform: rotate(72deg)
		}
	}
	
	.normal_loading .box .loading.show .shade {
		animation: like_poof_other .7s linear infinite forwards
	}
	
	@keyframes like_poof_other {
		0% {
			transform: scale(1)
		}
		25% {
			transform: scale(.5)
		}
		50% {
			transform: scale(.5)
		}
		75% {
			transform: scale(.5)
		}
		to {
			transform: scale(1)
		}
	}
	
	.normal_loading .box .loading2 {
		width: 2.64533rem;
		height: 2.64533rem;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		background-color: hsla(0, 0%, 100%, .8);
		border-radius: .21333rem
	}
	
	.normal_loading .box .loading2 img {
		display: block;
		width: 100%;
		height: 100%
	}
	
	.normal_loading .box .loading2 .circle-rotating {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		animation: circle_rotating .7s linear infinite forwards
	}
	
	.normal_loading .box .loading2 .circle-rotating-new {
		position: absolute;
		width: 70%;
		height: 70%;
		left: 15%;
		top: 15%;
		border-radius: 50%;
		border: solid hsla(0, 0%, 100%, .8);
		border-width: 2px;
		box-sizing: border-box;
		border-top-color: #ff464e;
		border-right-color: #ff464e;
		animation: circle_rotating .7s linear infinite forwards
	}
	
	[data-dpr="2"] .normal_loading .box .loading2 .circle-rotating-new {
		border-width: 4px
	}
	
	[data-dpr="3"] .normal_loading .box .loading2 .circle-rotating-new {
		border-width: 6px
	}
	
	@keyframes circle_rotating {
		0% {
			transform: rotate(0)
		}
		to {
			transform: rotate(1turn)
		}
	}
	
	.more {
		text-align: center;
		padding: 2% 0
	}
	
	.more,
	.more a {
		font-size: .512rem
	}
	
	.more a {
		color: #333;
		padding: 0 .42667rem
	}
	
	.more a img {
		vertical-align: -.04267rem;
		height: .42667rem;
		margin: 0 auto;
		margin-left: .08533rem
	}
	
	#classify,
	#t-find {
		float: left
	}
	
	#t-user,
	#user {
		float: right
	}
	
	#head {
		position: relative
	}
	
	#index,
	#t-index,
	.fixtop {
		position: absolute
	}
	
	.btn {
		display: inline-block
	}
	
	#head.logo,
	#index .logo,
	#t-find img,
	#t-user a,
	.fixtop span {
		display: block
	}
	
	#t-index,
	#t-user a {
		color: #333
	}
	
	.fixtop {
		background: #fff
	}
	
	#t-index,
	#t-user a {
		text-align: center
	}
	
	.btn {
		text-decoration: none
	}
	
	#t-index,
	.btn {
		overflow: hidden
	}
	
	#head {
		z-index: 199;
		height: 44px;
		width: 100%;
		overflow: inherit;
		border-bottom: 1px solid #ebebeb
	}
	
	[data-dpr="2"] #head {
		height: 88px
	}
	
	[data-dpr="3"] #head {
		height: 132px
	}
	
	#head.logo {
		margin: 0 auto
	}
	
	#head .logo img {
		height: 24px
	}
	
	[data-dpr="2"] #head .logo img {
		height: 48px
	}
	
	[data-dpr="3"] #head .logo img {
		height: 72px
	}
	
	.fixtop {
		z-index: 999;
		height: 44px;
		width: 100%
	}
	
	[data-dpr="2"] .fixtop {
		height: 88px
	}
	
	[data-dpr="3"] .fixtop {
		height: 132px
	}
	
	#t-find {
		padding-top: 8px;
		padding-left: .512rem;
		height: 28px;
		width: 1.19467rem
	}
	
	[data-dpr="2"] #t-find {
		padding-top: 15px
	}
	
	[data-dpr="3"] #t-find {
		padding-top: 23px
	}
	
	[data-dpr="2"] #t-find {
		height: 56px
	}
	
	[data-dpr="3"] #t-find {
		height: 84px
	}
	
	#t-find img {
		width: 100%;
		height: 100%
	}
	
	#classify {
		padding-top: 10px;
		padding-left: .512rem
	}
	
	[data-dpr="2"] #classify {
		padding-top: 20px
	}
	
	[data-dpr="3"] #classify {
		padding-top: 30px
	}
	
	#index {
		z-index: -1;
		padding: 0 1.536rem;
		width: 100%;
		text-align: center;
		cursor: default;
		box-sizing: border-box
	}
	
	#index .logo {
		margin-top: 10px;
		width: 100%
	}
	
	[data-dpr="2"] #index .logo {
		margin-top: 20px
	}
	
	[data-dpr="3"] #index .logo {
		margin-top: 30px
	}
	
	.search-block {
		position: absolute;
		padding-right: 1.87733rem;
		padding-left: .59733rem;
		width: 100%;
		box-sizing: border-box;
		font-size: 12px;
		color: #bbb
	}
	
	[data-dpr="2"] .search-block {
		font-size: 24px
	}
	
	[data-dpr="3"] .search-block {
		font-size: 36px
	}
	
	.search-block button {
		border: 0 none;
		background: none
	}
	
	.search-block input {
		display: block;
		height: 100%;
		width: 100%;
		font: -webkit-small-control;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0;
		text-shadow: none;
		text-align: start;
		border: none;
		outline-style: none;
		word-break: normal;
		background-color: transparent;
		font-size: inherit;
		color: inherit;
		-webkit-tap-highlight-color: transparent;
		-webkit-appearance: none
	}
	
	.search-block .search-input {
		position: relative;
		display: block;
		height: 28px;
		line-height: 28px;
		margin-top: 10px;
		background-color: #f2f2f2;
		border-radius: .17067rem;
		padding-left: 31px
	}
	
	[data-dpr="2"] .search-block .search-input {
		height: 56px
	}
	
	[data-dpr="3"] .search-block .search-input {
		height: 84px
	}
	
	[data-dpr="2"] .search-block .search-input {
		line-height: 56px
	}
	
	[data-dpr="3"] .search-block .search-input {
		line-height: 84px
	}
	
	[data-dpr="2"] .search-block .search-input {
		margin-top: 20px
	}
	
	[data-dpr="3"] .search-block .search-input {
		margin-top: 30px
	}
	
	[data-dpr="2"] .search-block .search-input {
		padding-left: 62px
	}
	
	[data-dpr="3"] .search-block .search-input {
		padding-left: 93px
	}
	
	.search-block .search-icon {
		position: absolute;
		left: 8px;
		top: 7px;
		width: 15px;
		height: 15px;
		line-height: 1;
		color: inherit
	}
	
	[data-dpr="2"] .search-block .search-icon {
		left: 16px
	}
	
	[data-dpr="3"] .search-block .search-icon {
		left: 24px
	}
	
	[data-dpr="2"] .search-block .search-icon {
		top: 14px
	}
	
	[data-dpr="3"] .search-block .search-icon {
		top: 21px
	}
	
	[data-dpr="2"] .search-block .search-icon {
		width: 30px
	}
	
	[data-dpr="3"] .search-block .search-icon {
		width: 45px
	}
	
	[data-dpr="2"] .search-block .search-icon {
		height: 30px
	}
	
	[data-dpr="3"] .search-block .search-icon {
		height: 45px
	}
	
	.search-block .search-icon .iconfont {
		font-size: 15px
	}
	
	[data-dpr="2"] .search-block .search-icon .iconfont {
		font-size: 30px
	}
	
	[data-dpr="3"] .search-block .search-icon .iconfont {
		font-size: 45px
	}
	
	.search-block .search-img {
		display: inline-block;
		height: 14px;
		margin-top: 7px;
		margin-right: 4px;
		vertical-align: top
	}
	
	[data-dpr="2"] .search-block .search-img {
		height: 28px
	}
	
	[data-dpr="3"] .search-block .search-img {
		height: 42px
	}
	
	[data-dpr="2"] .search-block .search-img {
		margin-top: 14px
	}
	
	[data-dpr="3"] .search-block .search-img {
		margin-top: 21px
	}
	
	[data-dpr="2"] .search-block .search-img {
		margin-right: 8px
	}
	
	[data-dpr="3"] .search-block .search-img {
		margin-right: 12px
	}
	
	.search-block .del {
		display: none;
		position: absolute;
		right: 8px;
		top: 6px;
		line-height: normal
	}
	
	[data-dpr="2"] .search-block .del {
		right: 15px
	}
	
	[data-dpr="3"] .search-block .del {
		right: 23px
	}
	
	[data-dpr="2"] .search-block .del {
		top: 12px
	}
	
	[data-dpr="3"] .search-block .del {
		top: 18px
	}
	
	.search-block .del img {
		height: 12px
	}
	
	[data-dpr="2"] .search-block .del img {
		height: 24px
	}
	
	[data-dpr="3"] .search-block .del img {
		height: 36px
	}
	
	#t-index {
		cursor: default;
		width: 100%;
		z-index: -1;
		padding: 0 1.536rem;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		box-sizing: border-box;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	
	[data-dpr="2"] #t-index {
		height: 88px
	}
	
	[data-dpr="3"] #t-index {
		height: 132px
	}
	
	[data-dpr="2"] #t-index {
		line-height: 88px
	}
	
	[data-dpr="3"] #t-index {
		line-height: 132px
	}
	
	[data-dpr="2"] #t-index {
		font-size: 36px
	}
	
	[data-dpr="3"] #t-index {
		font-size: 54px
	}
	
	#user {
		position: relative;
		z-index: 2;
		padding-top: 10px;
		padding-right: .512rem
	}
	
	[data-dpr="2"] #user {
		padding-top: 20px
	}
	
	[data-dpr="3"] #user {
		padding-top: 30px
	}
	
	#t-user {
		padding-top: 10px
	}
	
	[data-dpr="2"] #t-user {
		padding-top: 20px
	}
	
	[data-dpr="3"] #t-user {
		padding-top: 30px
	}
	
	#t-user a {
		padding-right: .512rem;
		height: 24px;
		line-height: 24px;
		font-size: 14px
	}
	
	[data-dpr="2"] #t-user a {
		height: 48px
	}
	
	[data-dpr="3"] #t-user a {
		height: 72px
	}
	
	[data-dpr="2"] #t-user a {
		line-height: 48px
	}
	
	[data-dpr="3"] #t-user a {
		line-height: 72px
	}
	
	[data-dpr="2"] #t-user a {
		font-size: 28px
	}
	
	[data-dpr="3"] #t-user a {
		font-size: 42px
	}
	
	.btn {
		width: 1.024rem;
		height: 24px;
		background-size: cover
	}
	
	[data-dpr="2"] .btn {
		height: 48px
	}
	
	[data-dpr="3"] .btn {
		height: 72px
	}
	
	#head .btn {
		vertical-align: top
	}
	
	#head .btn .iconfont {
		font-size: 24px
	}
	
	[data-dpr="2"] #head .btn .iconfont {
		font-size: 48px
	}
	
	[data-dpr="3"] #head .btn .iconfont {
		font-size: 72px
	}
	
	.btn-type {
		background: url(/jpwebapp_v1/images_v1/head/btn-type.png?20160412) no-repeat scroll 0 0;
		background-size: contain
	}
	
	.btn-sign {
		background: url(/jpwebapp_v1/images_v1/head/btn-sign.png?20160812) no-repeat scroll 0 0;
		background-size: contain
	}
	
	.btn-back {
		background: url(/jpwebapp_v1/images_v1/head/btn-back.png?20160412) no-repeat scroll 0 0;
		background-size: contain
	}
	
	.toast_alert {
		position: fixed;
		top: 45%;
		width: 100%;
		z-index: 2000
	}
	
	.toast_alert .box {
		background: rgba(0, 0, 0, .75);
		padding: .42667rem;
		width: 6.82667rem;
		margin: 0 auto;
		color: #fff;
		text-align: center;
		font-size: .59733rem;
		white-space: normal;
		word-break: break-all;
		word-wrap: break-word
	}
	
	.alert_fullbg_other {
		height: 100%;
		top: 0;
		left: 0;
		z-index: 200;
		filter: alpha(opacity=0);
		opacity: 0;
		background-color: #000
	}
	
	.alert_fullbg_other,
	.normal-alert {
		display: none;
		width: 100%;
		position: fixed
	}
	
	.normal-alert {
		max-width: 16rem;
		min-width: 6.82667rem;
		top: 30%;
		text-align: center;
		z-index: 201
	}
	
	.normal-alert .box {
		width: 90%;
		height: auto;
		margin: 0 auto;
		overflow: hidden;
		-webkit-box-sizing: border-box
	}
	
	.normal-alert .box .txt {
		padding: 15px 8px;
		text-align: center;
		margin-top: 0
	}
	
	[data-dpr="2"] .normal-alert .box .txt {
		padding-top: 30px
	}
	
	[data-dpr="3"] .normal-alert .box .txt {
		padding-top: 45px
	}
	
	[data-dpr="2"] .normal-alert .box .txt {
		padding-bottom: 30px
	}
	
	[data-dpr="3"] .normal-alert .box .txt {
		padding-bottom: 45px
	}
	
	[data-dpr="2"] .normal-alert .box .txt {
		padding-left: 15px
	}
	
	[data-dpr="3"] .normal-alert .box .txt {
		padding-left: 23px
	}
	
	[data-dpr="2"] .normal-alert .box .txt {
		padding-right: 15px
	}
	
	[data-dpr="3"] .normal-alert .box .txt {
		padding-right: 23px
	}
	
	[data-dpr="2"] .normal-alert .box .txt,
	[data-dpr="3"] .normal-alert .box .txt {
		margin-top: 0
	}
	
	.normal-alert .box p {
		font-size: 14px;
		color: #333;
		margin-top: 10px;
		text-align: center
	}
	
	[data-dpr="2"] .normal-alert .box p {
		font-size: 28px
	}
	
	[data-dpr="3"] .normal-alert .box p {
		font-size: 42px
	}
	
	[data-dpr="2"] .normal-alert .box p {
		margin-top: 20px
	}
	
	[data-dpr="3"] .normal-alert .box p {
		margin-top: 30px
	}
	
	.normal-alert-other {
		position: absolute
	}
	
	.normal-alert .del {
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 10
	}
	
	.normal-alert .del img {
		width: 18px
	}
	
	[data-dpr="2"] .normal-alert .del img {
		width: 36px
	}
	
	[data-dpr="3"] .normal-alert .del img {
		width: 54px
	}
	
	#bag-alert .box {
		margin: 0 auto;
		width: 90%;
		background: #f4f4f8;
		height: auto;
		overflow: hidden;
		-webkit-box-sizing: border-box;
		border-radius: .17067rem
	}
	
	.btn-all {
		border-top: 1px solid #ebebeb
	}
	
	.btn-all a {
		display: block;
		width: 47%;
		padding-top: 13px;
		padding-bottom: 13px;
		text-align: center;
		font-size: 14px
	}
	
	[data-dpr="2"] .btn-all a {
		padding-top: 26px
	}
	
	[data-dpr="3"] .btn-all a {
		padding-top: 39px
	}
	
	[data-dpr="2"] .btn-all a {
		padding-bottom: 26px
	}
	
	[data-dpr="3"] .btn-all a {
		padding-bottom: 39px
	}
	
	[data-dpr="2"] .btn-all a {
		font-size: 28px
	}
	
	[data-dpr="3"] .btn-all a {
		font-size: 42px
	}
	
	.btn-all a.btn01 {
		border-right: 1px solid #ebebeb
	}
	
	.btn-all a.btn02 {
		color: #ff464e
	}
	
	.btn-all a.btn_center {
		margin: 0 auto
	}
	
	#bag-alert .txt {
		color: #333;
		font-size: 14px;
		padding-top: 20px;
		padding-bottom: 20px
	}
	
	[data-dpr="2"] #bag-alert .txt {
		font-size: 28px
	}
	
	[data-dpr="3"] #bag-alert .txt {
		font-size: 42px
	}
	
	[data-dpr="2"] #bag-alert .txt {
		padding-top: 40px
	}
	
	[data-dpr="3"] #bag-alert .txt {
		padding-top: 60px
	}
	
	[data-dpr="2"] #bag-alert .txt {
		padding-bottom: 40px
	}
	
	[data-dpr="3"] #bag-alert .txt {
		padding-bottom: 60px
	}
	
	.item-empty {
		width: 100%;
		text-align: center;
		margin: 1.06667rem 0;
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
		margin-bottom: .59733rem
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
	
	.sku_mask {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .8);
		z-index: 401;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		visibility: hidden
	}
	
	.sku_list {
		width: 100%;
		background: #fff;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		-webkit-transform: translateY(100%);
		transition: all .5s ease;
		-webkit-transition: all .5s ease;
		height: 400px
	}
	
	[data-dpr="2"] .sku_list {
		height: 800px
	}
	
	[data-dpr="3"] .sku_list {
		height: 1200px
	}
	
	.sku_list .button_submit,
	.sku_list .submit {
		height: 48px;
		line-height: 48px;
		font-size: 20px;
		color: #fff;
		background: #dbdbdb;
		display: inline-block;
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 0
	}
	
	[data-dpr="2"] .sku_list .button_submit,
	[data-dpr="2"] .sku_list .submit {
		height: 96px
	}
	
	[data-dpr="3"] .sku_list .button_submit,
	[data-dpr="3"] .sku_list .submit {
		height: 144px
	}
	
	[data-dpr="2"] .sku_list .button_submit,
	[data-dpr="2"] .sku_list .submit {
		line-height: 96px
	}
	
	[data-dpr="3"] .sku_list .button_submit,
	[data-dpr="3"] .sku_list .submit {
		line-height: 144px
	}
	
	[data-dpr="2"] .sku_list .button_submit,
	[data-dpr="2"] .sku_list .submit {
		font-size: 40px
	}
	
	[data-dpr="3"] .sku_list .button_submit,
	[data-dpr="3"] .sku_list .submit {
		font-size: 60px
	}
	
	.sku_list .icon_closed {
		position: absolute;
		z-index: 99;
		right: .512rem;
		top: .512rem;
		font-size: 24px;
		cursor: pointer
	}
	
	[data-dpr="2"] .sku_list .icon_closed {
		font-size: 48px
	}
	
	[data-dpr="3"] .sku_list .icon_closed {
		font-size: 72px
	}
	
	.sku_list .submit.newSubmit {
		position: fixed;
		bottom: 0;
		left: 0;
		color: #fff;
		text-align: center;
		width: 100%;
		font-size: 20px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: stretch;
		align-items: stretch;
		background: #fff;
		height: auto
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit {
		font-size: 40px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit {
		font-size: 60px
	}
	
	.sku_list .submit.newSubmit a {
		color: #fff;
		background: #dbdbdb;
		display: inline-block;
		width: 132px;
		-ms-flex: 1 1 100px;
		flex: 1 1 100px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit a {
		width: 264px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit a {
		width: 396px
	}
	
	.sku_list .submit.newSubmit.oneBtn .btn {
		line-height: 48px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.oneBtn .btn {
		line-height: 96px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.oneBtn .btn {
		line-height: 144px
	}
	
	.sku_list .submit.newSubmit.towBtn {
		background: #fff;
		border-top: 1px solid #ebebeb;
		padding: 1px 7px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn {
		padding-top: 2px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn {
		padding-top: 3px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn {
		padding-bottom: 2px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn {
		padding-bottom: 3px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn {
		padding-left: 14px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn {
		padding-left: 21px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn {
		padding-right: 14px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn {
		padding-right: 21px
	}
	
	.sku_list .submit.newSubmit.towBtn .btn {
		line-height: 40px;
		margin: 7px;
		border-radius: 4px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn .btn {
		line-height: 80px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn .btn {
		line-height: 120px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn .btn {
		margin: 14px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn .btn {
		margin: 21px
	}
	
	[data-dpr="2"] .sku_list .submit.newSubmit.towBtn .btn {
		border-radius: 8px
	}
	
	[data-dpr="3"] .sku_list .submit.newSubmit.towBtn .btn {
		border-radius: 12px
	}
	
	.sku_list .submit.newSubmit.cansubmit a {
		background: #ff464e
	}
	
	.button_submit.button_red,
	.sku_list .submit.cansubmit {
		background-color: #ff464e;
		color: #fff
	}
	
	.sku_list .submit.disabled {
		background-color: #dbdbdb
	}
	
	.sku_mask.sku_maskshow {
		visibility: visible
	}
	
	.sku_mask.sku_maskshow .sku_list {
		transform: translateY(0);
		-webkit-transform: translateY(0)
	}
	
	.sku_list .type-list {
		max-height: 252px;
		padding-top: 14px;
		overflow: auto
	}
	
	[data-dpr="2"] .sku_list .type-list {
		max-height: 504px
	}
	
	[data-dpr="3"] .sku_list .type-list {
		max-height: 756px
	}
	
	[data-dpr="2"] .sku_list .type-list {
		padding-top: 28px
	}
	
	[data-dpr="3"] .sku_list .type-list {
		padding-top: 42px
	}
	
	.sku_list .type-list .normal:last-child {
		padding-bottom: 48px
	}
	
	[data-dpr="2"] .sku_list .type-list .normal:last-child {
		padding-bottom: 96px
	}
	
	[data-dpr="3"] .sku_list .type-list .normal:last-child {
		padding-bottom: 144px
	}
	
	.sku_list .type-list li {
		margin-top: 6px
	}
	
	[data-dpr="2"] .sku_list .type-list li {
		margin-top: 12px
	}
	
	[data-dpr="3"] .sku_list .type-list li {
		margin-top: 18px
	}
	
	.sku_list .type-list .num_choose {
		font-size: 14px
	}
	
	[data-dpr="2"] .sku_list .type-list .num_choose {
		font-size: 28px
	}
	
	[data-dpr="3"] .sku_list .type-list .num_choose {
		font-size: 42px
	}
	
	.sku_list .type-list .num_choose span {
		display: inline-block;
		color: #4a4a4a;
		float: right;
		line-height: 30px;
		font-size: 16px
	}
	
	[data-dpr="2"] .sku_list .type-list .num_choose span {
		line-height: 60px
	}
	
	[data-dpr="3"] .sku_list .type-list .num_choose span {
		line-height: 90px
	}
	
	[data-dpr="2"] .sku_list .type-list .num_choose span {
		font-size: 32px
	}
	
	[data-dpr="3"] .sku_list .type-list .num_choose span {
		font-size: 48px
	}
	
	.sku_list .type-list .num_choose span:first-child {
		float: left
	}
	
	.sku_list .type-list .num_choose span.num {
		padding: 0 1.024rem
	}
	
	.sku_list .type-list .num_choose i {
		background-color: #f7f7f7;
		display: inline-block;
		height: 30px;
		width: 30px;
		color: #ff464e;
		text-align: center;
		cursor: pointer
	}
	
	[data-dpr="2"] .sku_list .type-list .num_choose i {
		height: 60px
	}
	
	[data-dpr="3"] .sku_list .type-list .num_choose i {
		height: 90px
	}
	
	[data-dpr="2"] .sku_list .type-list .num_choose i {
		width: 60px
	}
	
	[data-dpr="3"] .sku_list .type-list .num_choose i {
		width: 90px
	}
	
	.sku_list .type-list .num_choose i.bad {
		color: #dbdbdb
	}
	
	.sku_list .type-list .num_choose.disnone {
		display: inherit
	}
	
	.sku_list .sku_box {
		padding-left: 12px;
		padding-top: 12px
	}
	
	[data-dpr="2"] .sku_list .sku_box {
		padding-left: 24px
	}
	
	[data-dpr="3"] .sku_list .sku_box {
		padding-left: 36px
	}
	
	[data-dpr="2"] .sku_list .sku_box {
		padding-top: 24px
	}
	
	[data-dpr="3"] .sku_list .sku_box {
		padding-top: 36px
	}
	
	.price .jg {
		color: #ff464e;
		font-size: 22px
	}
	
	[data-dpr="2"] .price .jg {
		font-size: 44px
	}
	
	[data-dpr="3"] .price .jg {
		font-size: 66px
	}
	
	.price .jq.js-ctprice {
		display: none
	}
	
	.price .jg:before {
		color: #ff464e;
		content: "¥";
		font-size: 16px;
		font-family: arial;
		margin-right: 2px
	}
	
	[data-dpr="2"] .price .jg:before {
		font-size: 32px
	}
	
	[data-dpr="3"] .price .jg:before {
		font-size: 48px
	}
	
	[data-dpr="2"] .price .jg:before {
		margin-right: 4px
	}
	
	[data-dpr="3"] .price .jg:before {
		margin-right: 6px
	}
	
	.price .fx {
		color: #fff;
		background: #1cb;
		height: 13px;
		line-height: 13px;
		font-size: 11px;
		padding-left: 2px;
		padding-right: 2px;
		display: inline-block;
		vertical-align: middle
	}
	
	[data-dpr="2"] .price .fx {
		height: 26px
	}
	
	[data-dpr="3"] .price .fx {
		height: 39px
	}
	
	[data-dpr="2"] .price .fx {
		line-height: 26px
	}
	
	[data-dpr="3"] .price .fx {
		line-height: 39px
	}
	
	[data-dpr="2"] .price .fx {
		font-size: 22px
	}
	
	[data-dpr="3"] .price .fx {
		font-size: 33px
	}
	
	[data-dpr="2"] .price .fx {
		padding-left: 4px
	}
	
	[data-dpr="3"] .price .fx {
		padding-left: 6px
	}
	
	[data-dpr="2"] .price .fx {
		padding-right: 4px
	}
	
	[data-dpr="3"] .price .fx {
		padding-right: 6px
	}
	
	.price .fx.disnone {
		display: none
	}
	
	.prop {
		color: #4a4a4a;
		font-size: 14px;
		width: 170px;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}
	
	[data-dpr="2"] .prop {
		font-size: 28px
	}
	
	[data-dpr="3"] .prop {
		font-size: 42px
	}
	
	[data-dpr="2"] .prop {
		width: 340px
	}
	
	[data-dpr="3"] .prop {
		width: 510px
	}
	
	.server_mask .sku_list {
		height: auto
	}
	
	.server_mask .js-dialog-body {
		max-height: 375px;
		overflow-y: auto
	}
	
	[data-dpr="2"] .server_mask .js-dialog-body {
		max-height: 750px
	}
	
	[data-dpr="3"] .server_mask .js-dialog-body {
		max-height: 1125px
	}
	
	.server_mask .close_botton {
		position: static;
		width: 100%;
		background: #ff464e;
		color: #fff;
		text-align: center;
		height: 48px;
		line-height: 48px;
		font-size: 18px
	}
	
	[data-dpr="2"] .server_mask .close_botton {
		height: 96px
	}
	
	[data-dpr="3"] .server_mask .close_botton {
		height: 144px
	}
	
	[data-dpr="2"] .server_mask .close_botton {
		line-height: 96px
	}
	
	[data-dpr="3"] .server_mask .close_botton {
		line-height: 144px
	}
	
	[data-dpr="2"] .server_mask .close_botton {
		font-size: 36px
	}
	
	[data-dpr="3"] .server_mask .close_botton {
		font-size: 54px
	}
	
	.server_mask p {
		font-size: 20px;
		height: 56px;
		line-height: 56px;
		text-align: center;
		color: #4a4a4a;
		border-bottom: 1px solid #e7e7e7
	}
	
	[data-dpr="2"] .server_mask p {
		font-size: 40px
	}
	
	[data-dpr="3"] .server_mask p {
		font-size: 60px
	}
	
	[data-dpr="2"] .server_mask p {
		height: 112px
	}
	
	[data-dpr="3"] .server_mask p {
		height: 168px
	}
	
	[data-dpr="2"] .server_mask p {
		line-height: 112px
	}
	
	[data-dpr="3"] .server_mask p {
		line-height: 168px
	}
	
	.server_mask li {
		margin-left: 14px;
		margin-right: 14px;
		padding-top: 14px;
		padding-bottom: 14px;
		border-bottom: 1px solid #e7e7e7;
		font-size: 0;
		position: relative
	}
	
	[data-dpr="2"] .server_mask li {
		margin-left: 28px
	}
	
	[data-dpr="3"] .server_mask li {
		margin-left: 42px
	}
	
	[data-dpr="2"] .server_mask li {
		margin-right: 28px
	}
	
	[data-dpr="3"] .server_mask li {
		margin-right: 42px
	}
	
	[data-dpr="2"] .server_mask li {
		padding-top: 28px
	}
	
	[data-dpr="3"] .server_mask li {
		padding-top: 42px
	}
	
	[data-dpr="2"] .server_mask li {
		padding-bottom: 28px
	}
	
	[data-dpr="3"] .server_mask li {
		padding-bottom: 42px
	}
	
	.server_mask li:last-child {
		border-bottom: none
	}
	
	.server_mask li a>div {
		font-size: 12px
	}
	
	[data-dpr="2"] .server_mask li a>div {
		font-size: 24px
	}
	
	[data-dpr="3"] .server_mask li a>div {
		font-size: 36px
	}
	
	.server_mask li .info {
		width: 100%;
		padding-right: 24px;
		box-sizing: border-box;
		color: #9b9b9b;
		line-height: 1.5
	}
	
	[data-dpr="2"] .server_mask li .info {
		padding-right: 48px
	}
	
	[data-dpr="3"] .server_mask li .info {
		padding-right: 72px
	}
	
	.server_mask li .info>div:last-child {
		padding-left: 13px
	}
	
	[data-dpr="2"] .server_mask li .info>div:last-child {
		padding-left: 26px
	}
	
	[data-dpr="3"] .server_mask li .info>div:last-child {
		padding-left: 39px
	}
	
	.server_mask li .icon {
		position: absolute;
		top: 50%;
		margin-top: -12px;
		right: 0;
		width: 24px;
		height: 24px
	}
	
	[data-dpr="2"] .server_mask li .icon {
		margin-top: -24px
	}
	
	[data-dpr="3"] .server_mask li .icon {
		margin-top: -36px
	}
	
	[data-dpr="2"] .server_mask li .icon,
	[data-dpr="3"] .server_mask li .icon {
		right: 0
	}
	
	[data-dpr="2"] .server_mask li .icon {
		width: 48px
	}
	
	[data-dpr="3"] .server_mask li .icon {
		width: 72px
	}
	
	[data-dpr="2"] .server_mask li .icon {
		height: 48px
	}
	
	[data-dpr="3"] .server_mask li .icon {
		height: 72px
	}
	
	.server_mask li .icon img {
		width: 100%
	}
	
	.server_mask li .title {
		font-size: 14px;
		margin-bottom: 6px
	}
	
	[data-dpr="2"] .server_mask li .title {
		font-size: 28px
	}
	
	[data-dpr="3"] .server_mask li .title {
		font-size: 42px
	}
	
	[data-dpr="2"] .server_mask li .title {
		margin-bottom: 12px
	}
	
	[data-dpr="3"] .server_mask li .title {
		margin-bottom: 18px
	}
	
	.server_mask li .title span {
		display: inline-block;
		vertical-align: middle;
		color: #4a4a4a;
		position: relative;
		padding-left: .34133rem
	}
	
	.server_mask li .title span:before {
		content: "";
		position: absolute;
		width: .17067rem;
		height: .17067rem;
		border-radius: 100%;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		background: #ff464e;
		opacity: .5
	}
	
	.sku-head {
		padding-left: 12px;
		padding-top: 12px
	}
	
	[data-dpr="2"] .sku-head {
		padding-left: 24px
	}
	
	[data-dpr="3"] .sku-head {
		padding-left: 36px
	}
	
	[data-dpr="2"] .sku-head {
		padding-top: 24px
	}
	
	[data-dpr="3"] .sku-head {
		padding-top: 36px
	}
	
	.sku-head img {
		width: 100px;
		position: absolute;
		top: -40px
	}
	
	[data-dpr="2"] .sku-head img {
		width: 200px
	}
	
	[data-dpr="3"] .sku-head img {
		width: 300px
	}
	
	[data-dpr="2"] .sku-head img {
		top: -80px
	}
	
	[data-dpr="3"] .sku-head img {
		top: -120px
	}
	
	.sku-head .info {
		display: inline-block;
		vertical-align: top;
		margin-left: 120px;
		min-height: 50px
	}
	
	[data-dpr="2"] .sku-head .info {
		margin-left: 240px
	}
	
	[data-dpr="3"] .sku-head .info {
		margin-left: 360px
	}
	
	[data-dpr="2"] .sku-head .info {
		min-height: 100px
	}
	
	[data-dpr="3"] .sku-head .info {
		min-height: 150px
	}
	
	.type-list {
		background-color: #fff;
		padding-left: 18px;
		padding-right: 18px;
		padding-top: 18px
	}
	
	[data-dpr="2"] .type-list {
		padding-left: 36px
	}
	
	[data-dpr="3"] .type-list {
		padding-left: 54px
	}
	
	[data-dpr="2"] .type-list {
		padding-right: 36px
	}
	
	[data-dpr="3"] .type-list {
		padding-right: 54px
	}
	
	[data-dpr="2"] .type-list {
		padding-top: 36px
	}
	
	[data-dpr="3"] .type-list {
		padding-top: 54px
	}
	
	.type-list .clear:after {
		content: "";
		display: block;
		clear: both
	}
	
	.type-list label {
		display: block;
		color: #4a4a4a;
		font-size: 16px
	}
	
	[data-dpr="2"] .type-list label {
		font-size: 32px
	}
	
	[data-dpr="3"] .type-list label {
		font-size: 48px
	}
	
	.type-list ul {
		position: relative;
		padding-bottom: 18px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent
	}
	
	[data-dpr="2"] .type-list ul {
		padding-bottom: 36px
	}
	
	[data-dpr="3"] .type-list ul {
		padding-bottom: 54px
	}
	
	.type-list ul:last-child {
		padding-bottom: 24px
	}
	
	[data-dpr="2"] .type-list ul:last-child {
		padding-bottom: 48px
	}
	
	[data-dpr="3"] .type-list ul:last-child {
		padding-bottom: 72px
	}
	
	.type-list li {
		position: relative;
		width: 30%;
		float: left;
		margin-top: 13px;
		cursor: pointer
	}
	
	[data-dpr="2"] .type-list li {
		margin-top: 25px
	}
	
	[data-dpr="3"] .type-list li {
		margin-top: 38px
	}
	
	.type-list li:nth-child(3n+2) {
		margin-left: 5%;
		margin-right: 5%
	}
	
	.type-list li span {
		width: 100%;
		display: block;
		border: 1px solid #4a4a4a;
		color: #4a4a4a;
		text-align: center;
		line-height: 32px;
		height: 32px;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent
	}
	
	[data-dpr="2"] .type-list li span {
		line-height: 64px
	}
	
	[data-dpr="3"] .type-list li span {
		line-height: 96px
	}
	
	[data-dpr="2"] .type-list li span {
		height: 64px
	}
	
	[data-dpr="3"] .type-list li span {
		height: 96px
	}
	
	[data-dpr="2"] .type-list li span {
		font-size: 28px
	}
	
	[data-dpr="3"] .type-list li span {
		font-size: 42px
	}
	
	.type-list li span em,
	.type-list li span i {
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	
	.type-list li span i {
		height: 17px;
		line-height: 17px
	}
	
	[data-dpr="2"] .type-list li span i {
		height: 34px
	}
	
	[data-dpr="3"] .type-list li span i {
		height: 51px
	}
	
	[data-dpr="2"] .type-list li span i {
		line-height: 34px
	}
	
	[data-dpr="3"] .type-list li span i {
		line-height: 51px
	}
	
	.type-list li span em {
		height: 14px;
		line-height: 14px;
		color: #4a4a4a;
		font-size: 8px;
		background-color: #f7f7f7
	}
	
	[data-dpr="2"] .type-list li span em {
		height: 28px
	}
	
	[data-dpr="3"] .type-list li span em {
		height: 42px
	}
	
	[data-dpr="2"] .type-list li span em {
		line-height: 28px
	}
	
	[data-dpr="3"] .type-list li span em {
		line-height: 42px
	}
	
	[data-dpr="2"] .type-list li span em {
		font-size: 16px
	}
	
	[data-dpr="3"] .type-list li span em {
		font-size: 24px
	}
	
	.type-list li.active span {
		color: #fff;
		background-color: #ff464e;
		border-color: #ff464e
	}
	
	.type-list li.active span em {
		background-color: #d0373d;
		color: #fff
	}
	
	.type-list li.no span {
		background-color: #f7f7f7;
		border-color: #dbdbdb;
		color: #dbdbdb
	}
	
	.type-list li.no span em {
		color: #dbdbdb;
		background-color: transparent
	}
	
	.type-list .tip-box {
		display: none;
		position: absolute;
		left: 50%;
		top: -3.84rem;
		width: 3.2rem;
		height: 3.2rem;
		margin-left: -1.6rem;
		border: 1px solid #4a4a4a;
		border-radius: 6px
	}
	
	.type-list .tip-box img {
		height: 100%;
		width: 100%;
		border-radius: inherit
	}
	
	.type-list .tip-box div {
		position: absolute;
		left: 50%;
		bottom: -.21333rem;
		width: 0;
		height: 0;
		margin-left: -.10667rem;
		border-top: .21333rem solid #4a4a4a;
		border-left: .21333rem solid transparent;
		border-right: .21333rem solid transparent
	}
	
	.couponbar {
		margin-bottom: 10px;
		margin-right: 14px;
		margin-left: 14px;
		height: 80px;
		background-color: #fff;
		text-align: center;
		position: relative;
		border-radius: 4px
	}
	
	[data-dpr="2"] .couponbar {
		margin-bottom: 20px
	}
	
	[data-dpr="3"] .couponbar {
		margin-bottom: 30px
	}
	
	[data-dpr="2"] .couponbar {
		margin-right: 28px
	}
	
	[data-dpr="3"] .couponbar {
		margin-right: 42px
	}
	
	[data-dpr="2"] .couponbar {
		margin-left: 28px
	}
	
	[data-dpr="3"] .couponbar {
		margin-left: 42px
	}
	
	[data-dpr="2"] .couponbar {
		height: 160px
	}
	
	[data-dpr="3"] .couponbar {
		height: 240px
	}
	
	[data-dpr="2"] .couponbar {
		border-radius: 8px
	}
	
	[data-dpr="3"] .couponbar {
		border-radius: 12px
	}
	
	.couponbar__not {
		width: 56px;
		height: 52px;
		right: 6px;
		top: 14px;
		position: absolute;
		background: url(/jpwebapp_v1/images_v1/icon/coupon.png) no-repeat;
		background-size: 380px
	}
	
	[data-dpr="2"] .couponbar__not {
		width: 112px
	}
	
	[data-dpr="3"] .couponbar__not {
		width: 168px
	}
	
	[data-dpr="2"] .couponbar__not {
		height: 104px
	}
	
	[data-dpr="3"] .couponbar__not {
		height: 156px
	}
	
	[data-dpr="2"] .couponbar__not {
		right: 12px
	}
	
	[data-dpr="3"] .couponbar__not {
		right: 18px
	}
	
	[data-dpr="2"] .couponbar__not {
		top: 28px
	}
	
	[data-dpr="3"] .couponbar__not {
		top: 42px
	}
	
	[data-dpr="2"] .couponbar__not {
		background-size: 760px
	}
	
	[data-dpr="3"] .couponbar__not {
		background-size: 1140px
	}
	
	.couponbar__not--used {
		background-position-y: -10px;
		background-position-x: -9px
	}
	
	[data-dpr="2"] .couponbar__not--used {
		background-position-y: -20px
	}
	
	[data-dpr="3"] .couponbar__not--used {
		background-position-y: -30px
	}
	
	[data-dpr="2"] .couponbar__not--used {
		background-position-x: -18px
	}
	
	[data-dpr="3"] .couponbar__not--used {
		background-position-x: -27px
	}
	
	.couponbar__not--over {
		background-position-y: -10px;
		background-position-x: -86px
	}
	
	[data-dpr="2"] .couponbar__not--over {
		background-position-y: -20px
	}
	
	[data-dpr="3"] .couponbar__not--over {
		background-position-y: -30px
	}
	
	[data-dpr="2"] .couponbar__not--over {
		background-position-x: -172px
	}
	
	[data-dpr="3"] .couponbar__not--over {
		background-position-x: -258px
	}
	
	.couponbar__not--cond {
		background-position-y: -10px;
		background-position-x: -314px
	}
	
	[data-dpr="2"] .couponbar__not--cond {
		background-position-y: -20px
	}
	
	[data-dpr="3"] .couponbar__not--cond {
		background-position-y: -30px
	}
	
	[data-dpr="2"] .couponbar__not--cond {
		background-position-x: -628px
	}
	
	[data-dpr="3"] .couponbar__not--cond {
		background-position-x: -942px
	}
	
	.couponbar__not--rece {
		background-position-y: -10px;
		background-position-x: -161px
	}
	
	[data-dpr="2"] .couponbar__not--rece {
		background-position-y: -20px
	}
	
	[data-dpr="3"] .couponbar__not--rece {
		background-position-y: -30px
	}
	
	[data-dpr="2"] .couponbar__not--rece {
		background-position-x: -322px
	}
	
	[data-dpr="3"] .couponbar__not--rece {
		background-position-x: -483px
	}
	
	.couponbar__not--out {
		background-position-y: -10px;
		background-position-x: -238px
	}
	
	[data-dpr="2"] .couponbar__not--out {
		background-position-y: -20px
	}
	
	[data-dpr="3"] .couponbar__not--out {
		background-position-y: -30px
	}
	
	[data-dpr="2"] .couponbar__not--out {
		background-position-x: -475px
	}
	
	[data-dpr="3"] .couponbar__not--out {
		background-position-x: -713px
	}
	
	.couponbar__left {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		width: 90px;
		background-color: #ff464e;
		color: #fff;
		float: left;
		height: 100%;
		font-size: 12px
	}
	
	[data-dpr="2"] .couponbar__left {
		border-top-left-radius: 8px
	}
	
	[data-dpr="3"] .couponbar__left {
		border-top-left-radius: 12px
	}
	
	[data-dpr="2"] .couponbar__left {
		border-bottom-left-radius: 8px
	}
	
	[data-dpr="3"] .couponbar__left {
		border-bottom-left-radius: 12px
	}
	
	[data-dpr="2"] .couponbar__left {
		width: 180px
	}
	
	[data-dpr="3"] .couponbar__left {
		width: 270px
	}
	
	[data-dpr="2"] .couponbar__left {
		font-size: 24px
	}
	
	[data-dpr="3"] .couponbar__left {
		font-size: 36px
	}
	
	.couponbar__left--over {
		background-color: #dbdbdb
	}
	
	.couponbar__price {
		font-size: 28px;
		padding-top: 12px
	}
	
	[data-dpr="2"] .couponbar__price {
		font-size: 56px
	}
	
	[data-dpr="3"] .couponbar__price {
		font-size: 84px
	}
	
	[data-dpr="2"] .couponbar__price {
		padding-top: 24px
	}
	
	[data-dpr="3"] .couponbar__price {
		padding-top: 36px
	}
	
	.couponbar__price span {
		font-size: 16px
	}
	
	[data-dpr="2"] .couponbar__price span {
		font-size: 32px
	}
	
	[data-dpr="3"] .couponbar__price span {
		font-size: 48px
	}
	
	.couponbar__cond {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	
	.couponbar__line {
		width: 8px;
		position: absolute;
		background: url(/jpwebapp_v1/images_v1/icon/coupon.png) no-repeat;
		height: 80px;
		background-size: 380px
	}
	
	[data-dpr="2"] .couponbar__line {
		width: 16px
	}
	
	[data-dpr="3"] .couponbar__line {
		width: 24px
	}
	
	[data-dpr="2"] .couponbar__line {
		height: 160px
	}
	
	[data-dpr="3"] .couponbar__line {
		height: 240px
	}
	
	[data-dpr="2"] .couponbar__line {
		background-size: 760px
	}
	
	[data-dpr="3"] .couponbar__line {
		background-size: 1140px
	}
	
	.couponbar__line--1 {
		background-position-y: -82px;
		background-position-x: -37px;
		left: 86px
	}
	
	[data-dpr="2"] .couponbar__line--1 {
		background-position-y: -164px
	}
	
	[data-dpr="3"] .couponbar__line--1 {
		background-position-y: -246px
	}
	
	[data-dpr="2"] .couponbar__line--1 {
		background-position-x: -74px
	}
	
	[data-dpr="3"] .couponbar__line--1 {
		background-position-x: -111px
	}
	
	[data-dpr="2"] .couponbar__line--1 {
		left: 172px
	}
	
	[data-dpr="3"] .couponbar__line--1 {
		left: 258px
	}
	
	.couponbar__line--2 {
		background-position-y: -82px;
		background-position-x: -10px;
		right: 32px
	}
	
	[data-dpr="2"] .couponbar__line--2 {
		background-position-y: -164px
	}
	
	[data-dpr="3"] .couponbar__line--2 {
		background-position-y: -246px
	}
	
	[data-dpr="2"] .couponbar__line--2 {
		background-position-x: -20px
	}
	
	[data-dpr="3"] .couponbar__line--2 {
		background-position-x: -30px
	}
	
	[data-dpr="2"] .couponbar__line--2 {
		right: 64px
	}
	
	[data-dpr="3"] .couponbar__line--2 {
		right: 96px
	}
	
	.couponbar__line--3 {
		background-position-y: -82px;
		background-position-x: -93px;
		left: 86px
	}
	
	[data-dpr="2"] .couponbar__line--3 {
		background-position-y: -164px
	}
	
	[data-dpr="3"] .couponbar__line--3 {
		background-position-y: -246px
	}
	
	[data-dpr="2"] .couponbar__line--3 {
		background-position-x: -186px
	}
	
	[data-dpr="3"] .couponbar__line--3 {
		background-position-x: -279px
	}
	
	[data-dpr="2"] .couponbar__line--3 {
		left: 172px
	}
	
	[data-dpr="3"] .couponbar__line--3 {
		left: 258px
	}
	
	.couponbar__desc {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-pack: center;
		justify-content: center;
		text-align: left;
		color: #999;
		float: left;
		height: 100%;
		width: auto;
		max-width: 153px;
		font-size: 10px;
		padding-left: 8px
	}
	
	[data-dpr="2"] .couponbar__desc {
		max-width: 306px
	}
	
	[data-dpr="3"] .couponbar__desc {
		max-width: 459px
	}
	
	[data-dpr="2"] .couponbar__desc {
		font-size: 20px
	}
	
	[data-dpr="3"] .couponbar__desc {
		font-size: 30px
	}
	
	[data-dpr="2"] .couponbar__desc {
		padding-left: 16px
	}
	
	[data-dpr="3"] .couponbar__desc {
		padding-left: 24px
	}
	
	.couponbar__desc--over {
		color: #bbb
	}
	
	.couponbar__title {
		color: #333;
		font-size: 14px;
		text-overflow: ellipsis;
		margin-bottom: 6px;
		white-space: nowrap;
		overflow: hidden
	}
	
	[data-dpr="2"] .couponbar__title {
		font-size: 28px
	}
	
	[data-dpr="3"] .couponbar__title {
		font-size: 42px
	}
	
	[data-dpr="2"] .couponbar__title {
		margin-bottom: 12px
	}
	
	[data-dpr="3"] .couponbar__title {
		margin-bottom: 18px
	}
	
	.couponbar__icon {
		color: #ff464e;
		border: 1px solid #ff464e;
		margin-right: 3px;
		padding-left: 1px;
		padding-right: 1px
	}
	
	[data-dpr="2"] .couponbar__icon {
		margin-right: 6px
	}
	
	[data-dpr="3"] .couponbar__icon {
		margin-right: 9px
	}
	
	[data-dpr="2"] .couponbar__icon {
		padding-left: 2px
	}
	
	[data-dpr="3"] .couponbar__icon {
		padding-left: 3px
	}
	
	[data-dpr="2"] .couponbar__icon {
		padding-right: 2px
	}
	
	[data-dpr="3"] .couponbar__icon {
		padding-right: 3px
	}
	
	.couponbar__tips {
		color: #f70
	}
	
	.couponbar__go {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		width: 36px;
		font-size: 12px;
		color: #999;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: center;
		align-items: center;
		float: right;
		height: 100%
	}
	
	[data-dpr="2"] .couponbar__go {
		border-top-right-radius: 8px
	}
	
	[data-dpr="3"] .couponbar__go {
		border-top-right-radius: 12px
	}
	
	[data-dpr="2"] .couponbar__go {
		border-bottom-right-radius: 8px
	}
	
	[data-dpr="3"] .couponbar__go {
		border-bottom-right-radius: 12px
	}
	
	[data-dpr="2"] .couponbar__go {
		width: 72px
	}
	
	[data-dpr="3"] .couponbar__go {
		width: 108px
	}
	
	[data-dpr="2"] .couponbar__go {
		font-size: 24px
	}
	
	[data-dpr="3"] .couponbar__go {
		font-size: 36px
	}
	
	.couponbar__gotext {
		line-height: 1.3;
		width: 12px;
		color: #ff464e
	}
	
	[data-dpr="2"] .couponbar__gotext {
		width: 24px
	}
	
	[data-dpr="3"] .couponbar__gotext {
		width: 36px
	}
	
	.couponbar__arrow {
		background: url(/jpwebapp_v1/images_v1/icon/coupon.png) no-repeat;
		background-size: 380px;
		background-position-y: -82px;
		background-position-x: -154px;
		width: 12px;
		height: 12px;
		margin-top: 2px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		background-size: 760px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		background-size: 1140px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		background-position-y: -164px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		background-position-y: -246px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		background-position-x: -308px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		background-position-x: -462px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		width: 24px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		width: 36px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		height: 24px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		height: 36px
	}
	
	[data-dpr="2"] .couponbar__arrow {
		margin-top: 4px
	}
	
	[data-dpr="3"] .couponbar__arrow {
		margin-top: 6px
	}
	
	.couponbar__select {
		background: none;
		border: 1px solid #999;
		border-radius: 18px;
		right: 13px;
		top: 31px;
		width: 18px;
		height: 18px;
		position: absolute
	}
	
	[data-dpr="2"] .couponbar__select {
		border-radius: 36px
	}
	
	[data-dpr="3"] .couponbar__select {
		border-radius: 54px
	}
	
	[data-dpr="2"] .couponbar__select {
		right: 26px
	}
	
	[data-dpr="3"] .couponbar__select {
		right: 39px
	}
	
	[data-dpr="2"] .couponbar__select {
		top: 62px
	}
	
	[data-dpr="3"] .couponbar__select {
		top: 93px
	}
	
	[data-dpr="2"] .couponbar__select {
		width: 36px
	}
	
	[data-dpr="3"] .couponbar__select {
		width: 54px
	}
	
	[data-dpr="2"] .couponbar__select {
		height: 36px
	}
	
	[data-dpr="3"] .couponbar__select {
		height: 54px
	}
	
	.couponbar.disabled .couponbar__left {
		background: rgba(255, 70, 78, .3)
	}
	
	.couponbar.disabled .couponbar__times,
	.couponbar.disabled .couponbar__title {
		color: #bbb
	}
	
	.couponbar.disabled .couponbar__line--1 {
		background-position-x: -65px
	}
	
	[data-dpr="2"] .couponbar.disabled .couponbar__line--1 {
		background-position-x: -130px
	}
	
	[data-dpr="3"] .couponbar.disabled .couponbar__line--1 {
		background-position-x: -195px
	}
	
	.couponbar.active .couponbar__select {
		background: url(/jpwebapp_v1/images_v1/shopping/radio-checked.png) no-repeat;
		background-size: cover;
		border: none;
		width: 18px;
		height: 18px
	}
	
	[data-dpr="2"] .couponbar.active .couponbar__select {
		width: 36px
	}
	
	[data-dpr="3"] .couponbar.active .couponbar__select {
		width: 54px
	}
	
	[data-dpr="2"] .couponbar.active .couponbar__select {
		height: 36px
	}
	
	[data-dpr="3"] .couponbar.active .couponbar__select {
		height: 54px
	}
	
	.couponbar__limit {
		font-size: 10px;
		margin-top: -6px;
		margin-bottom: 4px;
		overflow: hidden;
		color: #999
	}
	
	[data-dpr="2"] .couponbar__limit {
		font-size: 20px
	}
	
	[data-dpr="3"] .couponbar__limit {
		font-size: 30px
	}
	
	[data-dpr="2"] .couponbar__limit {
		margin-top: -12px
	}
	
	[data-dpr="3"] .couponbar__limit {
		margin-top: -18px
	}
	
	[data-dpr="2"] .couponbar__limit {
		margin-bottom: 8px
	}
	
	[data-dpr="3"] .couponbar__limit {
		margin-bottom: 12px
	}
	
	.couponbar__limit.disabled {
		color: #bbb
	}
	
	.active__Container {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		right: 0;
		overflow: hidden
	}
	
	[data-dpr="2"] .active__Container {
		width: 100px
	}
	
	[data-dpr="3"] .active__Container {
		width: 150px
	}
	
	[data-dpr="2"] .active__Container {
		height: 100px
	}
	
	[data-dpr="3"] .active__Container {
		height: 150px
	}
	
	.couponbar__active--time {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-pack: center;
		justify-content: center;
		width: 78px;
		height: 14px;
		margin-top: 14px;
		margin-left: -10px;
		text-align: center;
		transform: rotate(45deg);
		background: #ff464e;
		color: #fff;
		font-size: 10px
	}
	
	[data-dpr="2"] .couponbar__active--time {
		width: 156px
	}
	
	[data-dpr="3"] .couponbar__active--time {
		width: 234px
	}
	
	[data-dpr="2"] .couponbar__active--time {
		height: 28px
	}
	
	[data-dpr="3"] .couponbar__active--time {
		height: 42px
	}
	
	[data-dpr="2"] .couponbar__active--time {
		margin-top: 28px
	}
	
	[data-dpr="3"] .couponbar__active--time {
		margin-top: 42px
	}
	
	[data-dpr="2"] .couponbar__active--time {
		margin-left: -20px
	}
	
	[data-dpr="3"] .couponbar__active--time {
		margin-left: -30px
	}
	
	[data-dpr="2"] .couponbar__active--time {
		font-size: 20px
	}
	
	[data-dpr="3"] .couponbar__active--time {
		font-size: 30px
	}
	
	#t-user {
		font-size: 15px;
		color: #4a4a4a;
		padding-right: 14px
	}
	
	[data-dpr="2"] #t-user {
		font-size: 30px
	}
	
	[data-dpr="3"] #t-user {
		font-size: 45px
	}
	
	[data-dpr="2"] #t-user {
		padding-right: 28px
	}
	
	[data-dpr="3"] #t-user {
		padding-right: 42px
	}
	
	.app {
		padding-bottom: 5.33333rem
	}
	
	.app.has-bottom-menu {
		padding-bottom: 7.424rem
	}
	
	.hide {
		display: none!important
	}
	
	.customer_note {
		height: 32px;
		line-height: 32px;
		padding-left: 15px;
		padding-right: 15px;
		background: #fff4e5;
		color: #f70;
		font-size: 12px
	}
	
	[data-dpr="2"] .customer_note {
		height: 64px
	}
	
	[data-dpr="3"] .customer_note {
		height: 96px
	}
	
	[data-dpr="2"] .customer_note {
		line-height: 64px
	}
	
	[data-dpr="3"] .customer_note {
		line-height: 96px
	}
	
	[data-dpr="2"] .customer_note {
		padding-left: 30px
	}
	
	[data-dpr="3"] .customer_note {
		padding-left: 45px
	}
	
	[data-dpr="2"] .customer_note {
		padding-right: 30px
	}
	
	[data-dpr="3"] .customer_note {
		padding-right: 45px
	}
	
	[data-dpr="2"] .customer_note {
		font-size: 24px
	}
	
	[data-dpr="3"] .customer_note {
		font-size: 36px
	}
	
	.customer_note img {
		width: 24px;
		height: 24px;
		margin-right: 10px;
		vertical-align: middle
	}
	
	[data-dpr="2"] .customer_note img {
		width: 48px
	}
	
	[data-dpr="3"] .customer_note img {
		width: 72px
	}
	
	[data-dpr="2"] .customer_note img {
		height: 48px
	}
	
	[data-dpr="3"] .customer_note img {
		height: 72px
	}
	
	[data-dpr="2"] .customer_note img {
		margin-right: 20px
	}
	
	[data-dpr="3"] .customer_note img {
		margin-right: 30px
	}
	
	.item_cart {
		background: #fff;
		margin-bottom: 10px
	}
	
	[data-dpr="2"] .item_cart {
		margin-bottom: 20px
	}
	
	[data-dpr="3"] .item_cart {
		margin-bottom: 30px
	}
	
	.item_cart.lose_efficacy {
		background: #eee
	}
	
	.item_cart.lose_efficacy .good_list .good_item .tip_box {
		width: 29px;
		height: 15px;
		line-height: 15px;
		margin-right: 13px;
		font-size: 12px;
		color: #fff;
		text-align: center;
		background: #999
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		width: 58px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		width: 87px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		height: 30px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		height: 45px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		line-height: 30px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		line-height: 45px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		margin-right: 26px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		margin-right: 39px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .good_list .good_item .tip_box {
		font-size: 36px
	}
	
	.item_cart.lose_efficacy .good_list .good_item .good_info .info_third {
		color: #bbb
	}
	
	.item_cart.lose_efficacy .clear-lose {
		padding-bottom: 16px;
		background: #eee;
		text-align: center
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .clear-lose {
		padding-bottom: 32px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .clear-lose {
		padding-bottom: 48px
	}
	
	.item_cart.lose_efficacy .clear-lose .clear-btn {
		width: 108px;
		height: 27px;
		line-height: 27px;
		font-size: 14px;
		color: #333;
		border: 1px solid #333;
		text-align: center;
		display: inline-block
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		width: 216px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		width: 324px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		height: 54px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		height: 81px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		line-height: 54px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		line-height: 81px
	}
	
	[data-dpr="2"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart.lose_efficacy .clear-lose .clear-btn {
		font-size: 42px
	}
	
	.item_cart.lose_efficacy .good_radio {
		display: none
	}
	
	.item_cart.editting .info_second .type {
		display: inline-block;
		width: auto;
		height: 20px;
		line-height: 20px;
		padding-left: 8px;
		padding-right: 21px;
		font-size: 12px;
		border-width: 1px;
		border: 1px solid #3d993d;
		border-radius: 2.13333rem;
		color: #3d993d;
		cursor: pointer
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		height: 40px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		height: 60px
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		line-height: 40px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		line-height: 60px
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		padding-left: 16px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		padding-left: 24px
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		padding-right: 42px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		padding-right: 63px
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		font-size: 36px
	}
	
	[data-dpr="2"] .item_cart.editting .info_second .type {
		border-width: 1px
	}
	
	[data-dpr="3"] .item_cart.editting .info_second .type {
		border-width: 2px
	}
	
	.item_cart.editting .info_second .type .icon-liebiaojiantou {
		display: block!important
	}
	
	.item_cart .item_head_box {
		height: 44px
	}
	
	[data-dpr="2"] .item_cart .item_head_box {
		height: 88px
	}
	
	[data-dpr="3"] .item_cart .item_head_box {
		height: 132px
	}
	
	.item_cart .item_head_box .item_head {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		height: 44px;
		padding-left: 14px;
		padding-right: 14px;
		border-bottom: 1px solid #ebebeb
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head {
		height: 88px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head {
		height: 132px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head {
		padding-left: 28px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head {
		padding-left: 42px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head {
		padding-right: 28px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head {
		padding-right: 42px
	}
	
	.item_cart .item_head_box .item_head.fixed {
		position: fixed;
		z-index: 999;
		top: 0;
		background: #fff;
		box-sizing: border-box;
		width: 100%
	}
	
	.item_cart .item_head_box .item_head .head_radio {
		width: 31px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_radio {
		width: 62px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_radio {
		width: 93px
	}
	
	.item_cart .item_head_box .item_head .head_radio .iconfont {
		font-size: 20px;
		color: #9b9b9b
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_radio .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_radio .iconfont {
		font-size: 60px
	}
	
	.item_cart .item_head_box .item_head .head_radio .iconfont.icon-yixuanzhong {
		color: #ff464e
	}
	
	.item_cart .item_head_box .item_head .head_type {
		-ms-flex: 1;
		flex: 1;
		font-size: 14px;
		color: #333;
		overflow: hidden;
		white-space: nowrap
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type {
		font-size: 42px
	}
	
	.item_cart .item_head_box .item_head .head_type .bc {
		display: block
	}
	
	.item_cart .item_head_box .item_head .head_type span {
		vertical-align: middle
	}
	
	.item_cart .item_head_box .item_head .head_type .iconfont {
		font-size: 20px;
		margin-right: 8px;
		color: #666
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .iconfont {
		font-size: 60px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .iconfont {
		margin-right: 16px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .iconfont {
		margin-right: 24px
	}
	
	.item_cart .item_head_box .item_head .head_type .iconfont.icon-liebiaojiantou {
		font-size: 11px;
		margin-left: 5px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .iconfont.icon-liebiaojiantou {
		font-size: 22px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .iconfont.icon-liebiaojiantou {
		font-size: 33px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .iconfont.icon-liebiaojiantou {
		margin-left: 10px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .iconfont.icon-liebiaojiantou {
		margin-left: 15px
	}
	
	.item_cart .item_head_box .item_head .head_type .imgiconBox {
		display: inline-block;
		font-size: 20px;
		margin-right: 8px;
		width: 20px;
		height: 20px;
		color: #666
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		font-size: 40px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		font-size: 60px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		margin-right: 16px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		margin-right: 24px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		width: 40px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		width: 60px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		height: 40px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox {
		height: 60px
	}
	
	.item_cart .item_head_box .item_head .head_type .imgiconBox.icon-liebiaojiantou {
		font-size: 11px;
		margin-left: 5px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox.icon-liebiaojiantou {
		font-size: 22px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox.icon-liebiaojiantou {
		font-size: 33px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_type .imgiconBox.icon-liebiaojiantou {
		margin-left: 10px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_type .imgiconBox.icon-liebiaojiantou {
		margin-left: 15px
	}
	
	.item_cart .item_head_box .item_head .head_type .imgiconBox img {
		display: block;
		width: 100%;
		height: 100%
	}
	
	.item_cart .item_head_box .item_head .head_action {
		width: 62px;
		font-size: 12px;
		color: #ff464e;
		text-align: right
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_action {
		width: 124px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_action {
		width: 186px
	}
	
	[data-dpr="2"] .item_cart .item_head_box .item_head .head_action {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart .item_head_box .item_head .head_action {
		font-size: 36px
	}
	
	.item_cart .item_head_box .item_head .head_action #postage-free-link {
		color: #ff464e
	}
	
	.item_cart .item_body .marketing {
		padding-left: 52px;
		padding-right: 14px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		height: 36px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing {
		padding-left: 104px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing {
		padding-left: 156px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing {
		padding-right: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing {
		padding-right: 42px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing {
		height: 72px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing {
		height: 108px
	}
	
	.item_cart .item_body .marketing .tag {
		padding: 1px 3px;
		margin-right: 6px;
		border: 1px solid #ff464e;
		font-size: 10px;
		color: #ff464e
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		padding-top: 2px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		padding-top: 3px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		padding-bottom: 2px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		padding-bottom: 3px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		padding-left: 6px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		padding-left: 9px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		padding-right: 6px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		padding-right: 9px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		margin-right: 12px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		margin-right: 18px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .tag {
		font-size: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .tag {
		font-size: 30px
	}
	
	.item_cart .item_body .marketing .msg {
		-ms-flex: 1;
		flex: 1;
		font-size: 12px;
		color: #333
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .msg {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .msg {
		font-size: 36px
	}
	
	.item_cart .item_body .marketing .action {
		width: 62px;
		font-size: 12px;
		color: #ff464e;
		text-align: right
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .action {
		width: 124px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .action {
		width: 186px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .action {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .action {
		font-size: 36px
	}
	
	.item_cart .item_body .marketing .action span {
		vertical-align: middle
	}
	
	.item_cart .item_body .marketing .action .iconfont {
		vertical-align: middle;
		margin-left: 6px;
		font-size: 10px;
		color: #ff464e
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .action .iconfont {
		margin-left: 12px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .action .iconfont {
		margin-left: 18px
	}
	
	[data-dpr="2"] .item_cart .item_body .marketing .action .iconfont {
		font-size: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .marketing .action .iconfont {
		font-size: 30px
	}
	
	.item_cart .item_body .good_list .good_item {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		padding-left: 14px;
		overflow: hidden
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item {
		padding-left: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item {
		padding-left: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_radio {
		width: 31px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_radio {
		width: 62px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_radio {
		width: 93px
	}
	
	.item_cart .item_body .good_list .good_item .good_radio .iconfont {
		font-size: 20px;
		color: #9b9b9b
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_radio .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_radio .iconfont {
		font-size: 60px
	}
	
	.item_cart .item_body .good_list .good_item .good_radio .iconfont.icon-yixuanzhong {
		color: #ff464e
	}
	
	.item_cart .item_body .good_list .good_item:last-child .good_info {
		border-bottom: 1px solid #ebebeb
	}
	
	.item_cart .item_body .good_list .good_item .good_info {
		-ms-flex: 1;
		flex: 1;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-right: 14px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info {
		padding-top: 32px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info {
		padding-top: 48px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info {
		padding-bottom: 32px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info {
		padding-bottom: 48px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info {
		padding-right: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info {
		padding-right: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .pic {
		height: 90px;
		width: 90px;
		margin-right: 12px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .pic {
		height: 180px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .pic {
		height: 270px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .pic {
		width: 180px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .pic {
		width: 270px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .pic {
		margin-right: 24px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .pic {
		margin-right: 36px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .pic img {
		width: 100%;
		height: 100%;
		vertical-align: middle
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box {
		-ms-flex: 1;
		flex: 1;
		height: 90px;
		font-size: 14px;
		position: relative
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box {
		height: 180px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box {
		height: 270px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box {
		font-size: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_first {
		color: #333;
		line-height: 1
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_first .title {
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_second {
		color: #bbb;
		margin-top: 6px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second {
		margin-top: 12px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second {
		margin-top: 18px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_second .type {
		position: relative;
		white-space: nowrap;
		text-overflow: ellipsis;
		max-width: 6.82667rem;
		overflow: hidden
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		display: none;
		position: absolute;
		top: 1px;
		right: 7px;
		font-size: 11px;
		transform: rotate(90deg)
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		top: 2px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		top: 3px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		right: 14px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		right: 21px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		font-size: 22px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_second .icon-liebiaojiantou {
		font-size: 33px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third {
		position: absolute;
		bottom: 0;
		width: 100%
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price {
		margin-top: 7px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		float: left;
		margin-top: 10px;
		font-size: 12px;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 20px;
		margin-right: 3px;
		position: relative
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		margin-top: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		margin-top: 30px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		font-size: 24px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		font-size: 36px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		padding-left: 10px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		padding-left: 15px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		padding-right: 10px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		padding-right: 15px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		margin-right: 5px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price {
		margin-right: 8px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		font-size: 10px;
		position: absolute;
		background: #000;
		line-height: 18px;
		width: 5rem;
		text-align: center;
		color: #fff;
		height: 18px;
		top: -1rem;
		left: -80%;
		border-radius: 1rem
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		font-size: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		font-size: 30px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		line-height: 36px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		line-height: 54px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		height: 36px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc {
		height: 54px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .vip-price .extraDesc .oldIdentification {
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		bottom: -.2rem;
		left: 1.3rem;
		border-left: .2rem solid transparent;
		border-right: .2rem solid transparent;
		border-top: .2rem solid #000
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price {
		margin-top: 14px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price {
		margin-top: 21px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur {
		font-size: 14px;
		color: #ff464e
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur {
		font-size: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur i {
		font-style: normal;
		font-size: 10px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur i {
		font-size: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .cur i {
		font-size: 30px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old {
		font-size: 10px;
		color: #bbb;
		margin-left: 4px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old {
		font-size: 20px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old {
		font-size: 30px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old {
		margin-left: 8px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old {
		margin-left: 12px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old .oldTitle {
		position: absolute;
		background: #000;
		line-height: 1rem;
		width: 5rem;
		text-align: center;
		color: #fff;
		height: 1rem;
		top: -1.2rem;
		left: -80%;
		border-radius: .3rem
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .price .old .oldIdentification {
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		bottom: -.2rem;
		left: 1rem;
		border-left: .2rem solid transparent;
		border-right: .2rem solid transparent;
		border-top: .2rem solid #000
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num {
		margin: 0 auto;
		overflow: hidden;
		font-size: 14px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num {
		font-size: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num i {
		cursor: pointer;
		float: left;
		text-align: center;
		color: gray
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		width: 23px;
		height: 23px;
		line-height: 23px;
		background-color: #f4f4f8;
		color: #ff464e
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		width: 46px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		width: 69px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		height: 46px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		height: 69px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		line-height: 46px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .decrease,
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num .increase {
		line-height: 69px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num i.no {
		color: #ccc
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		width: 38px;
		height: 23px;
		font-size: 14px;
		color: #333;
		float: left;
		text-align: center;
		border: none
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		width: 75px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		width: 113px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		height: 46px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		height: 69px
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		font-size: 28px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .num input {
		font-size: 42px
	}
	
	.item_cart .item_body .good_list .good_item .good_info .info_box .info_third .del .iconfont {
		font-size: 20px;
		color: #bbb
	}
	
	[data-dpr="2"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .del .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .item_cart .item_body .good_list .good_item .good_info .info_box .info_third .del .iconfont {
		font-size: 60px
	}
	
	.gift_import {
		padding: 7px 10px;
		font-size: 12px;
		color: #fff;
		background: rgba(0, 0, 0, .7);
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0
	}
	
	[data-dpr="2"] .gift_import {
		padding-left: 20px
	}
	
	[data-dpr="3"] .gift_import {
		padding-left: 30px
	}
	
	[data-dpr="2"] .gift_import {
		padding-right: 20px
	}
	
	[data-dpr="3"] .gift_import {
		padding-right: 30px
	}
	
	[data-dpr="2"] .gift_import {
		padding-top: 14px
	}
	
	[data-dpr="3"] .gift_import {
		padding-top: 21px
	}
	
	[data-dpr="2"] .gift_import {
		padding-bottom: 14px
	}
	
	[data-dpr="3"] .gift_import {
		padding-bottom: 21px
	}
	
	[data-dpr="2"] .gift_import {
		font-size: 24px
	}
	
	[data-dpr="3"] .gift_import {
		font-size: 36px
	}
	
	[data-dpr="2"] .gift_import {
		bottom: 98px
	}
	
	[data-dpr="3"] .gift_import {
		bottom: 147px
	}
	
	.gift_import .act {
		font-size: 12px
	}
	
	[data-dpr="2"] .gift_import .act {
		font-size: 24px
	}
	
	[data-dpr="3"] .gift_import .act {
		font-size: 36px
	}
	
	.gift_import .act span {
		vertical-align: middle
	}
	
	.gift_import .act .iconfont {
		vertical-align: middle;
		margin-left: 6px;
		font-size: 10px
	}
	
	[data-dpr="2"] .gift_import .act .iconfont {
		margin-left: 12px
	}
	
	[data-dpr="3"] .gift_import .act .iconfont {
		margin-left: 18px
	}
	
	[data-dpr="2"] .gift_import .act .iconfont {
		font-size: 20px
	}
	
	[data-dpr="3"] .gift_import .act .iconfont {
		font-size: 30px
	}
	
	.has-bottom-menu .gift_import {
		bottom: 98px
	}
	
	[data-dpr="2"] .has-bottom-menu .gift_import {
		bottom: 196px
	}
	
	[data-dpr="3"] .has-bottom-menu .gift_import {
		bottom: 294px
	}
	
	.gift_box {
		display: none;
		background-color: #fff;
		margin: 0 auto;
		max-width: 16rem;
		min-width: 6.82667rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999
	}
	
	.gift_box .gb-title {
		height: 48px;
		line-height: 48px;
		font-size: 16px;
		width: 100%;
		text-align: center;
		color: #333;
		font-weight: 400;
		border-bottom: 1px solid #ebebeb
	}
	
	[data-dpr="2"] .gift_box .gb-title {
		height: 96px
	}
	
	[data-dpr="3"] .gift_box .gb-title {
		height: 144px
	}
	
	[data-dpr="2"] .gift_box .gb-title {
		line-height: 96px
	}
	
	[data-dpr="3"] .gift_box .gb-title {
		line-height: 144px
	}
	
	[data-dpr="2"] .gift_box .gb-title {
		font-size: 32px
	}
	
	[data-dpr="3"] .gift_box .gb-title {
		font-size: 48px
	}
	
	.gift_box .gb-title .gb-close {
		display: inline-block;
		float: right;
		width: 12px;
		height: 12px;
		/*background: url(../../../images_v1/icon/del.png?161222) no-repeat 50%;*/
		background-size: cover;
		margin-top: 18px;
		margin-right: 18px
	}
	
	[data-dpr="2"] .gift_box .gb-title .gb-close {
		width: 24px
	}
	
	[data-dpr="3"] .gift_box .gb-title .gb-close {
		width: 36px
	}
	
	[data-dpr="2"] .gift_box .gb-title .gb-close {
		height: 24px
	}
	
	[data-dpr="3"] .gift_box .gb-title .gb-close {
		height: 36px
	}
	
	[data-dpr="2"] .gift_box .gb-title .gb-close {
		margin-top: 36px
	}
	
	[data-dpr="3"] .gift_box .gb-title .gb-close {
		margin-top: 54px
	}
	
	[data-dpr="2"] .gift_box .gb-title .gb-close {
		margin-right: 36px
	}
	
	[data-dpr="3"] .gift_box .gb-title .gb-close {
		margin-right: 54px
	}
	
	.gift_box .gb-body {
		height: 15.36rem;
		overflow: auto;
		overflow-y: scroll;
		background: #fafafa
	}
	
	.gift_box .gb-body .gift_item {
		background: #fafafa;
		margin-bottom: 10px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item {
		margin-bottom: 20px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item {
		margin-bottom: 30px
	}
	
	.gift_box .gb-body .gift_item .gift_head {
		padding: 11px 14px;
		font-size: 14px;
		color: #333;
		background: #fff;
		border-bottom: 1px solid #ebebeb
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head {
		padding-top: 22px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head {
		padding-top: 33px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head {
		padding-bottom: 22px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head {
		padding-bottom: 33px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head {
		padding-left: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head {
		padding-left: 42px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head {
		padding-right: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head {
		padding-right: 42px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head {
		font-size: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head {
		font-size: 42px
	}
	
	.gift_box .gb-body .gift_item .gift_head .act.down {
		transform: rotate(90deg)
	}
	
	.gift_box .gb-body .gift_item .gift_head .act.up {
		transform: rotate(270deg)
	}
	
	.gift_box .gb-body .gift_item .gift_head .act .iconfont {
		vertical-align: middle;
		color: #bbb;
		font-size: 10px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_head .act .iconfont {
		font-size: 20px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_head .act .iconfont {
		font-size: 30px
	}
	
	.gift_box .gb-body .gift_item .pic_list {
		padding: 14px;
		overflow: scroll;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .pic_list {
		padding: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .pic_list {
		padding: 42px
	}
	
	.gift_box .gb-body .gift_item .pic_list img {
		margin-right: 10px;
		width: 60px;
		height: 60px;
		vertical-align: middle
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .pic_list img {
		margin-right: 20px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .pic_list img {
		margin-right: 30px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .pic_list img {
		width: 120px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .pic_list img {
		width: 180px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .pic_list img {
		height: 120px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .pic_list img {
		height: 180px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		padding-left: 14px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item {
		padding-left: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item {
		padding-left: 42px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_radio {
		width: 38px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_radio {
		width: 76px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_radio {
		width: 114px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_radio .iconfont {
		font-size: 20px;
		color: #9b9b9b
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_radio .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_radio .iconfont {
		font-size: 60px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_radio .iconfont.icon-yixuanzhong1 {
		color: #ff464e
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		-ms-flex: 1;
		flex: 1;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-direction: row;
		flex-direction: row;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-right: 14px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-top: 32px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-top: 48px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-bottom: 32px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-bottom: 48px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-right: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info {
		padding-right: 42px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		height: 70px;
		width: 70px;
		margin-right: 12px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		height: 140px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		height: 210px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		width: 140px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		width: 210px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		margin-right: 24px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic {
		margin-right: 36px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .pic img {
		width: 100%;
		height: 100%;
		vertical-align: middle
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box {
		-ms-flex: 1;
		flex: 1;
		height: 70px;
		font-size: 14px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box {
		height: 140px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box {
		height: 210px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box {
		font-size: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box {
		font-size: 42px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_first {
		color: #333;
		line-height: 1
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_first .title {
		width: 65%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_second {
		color: #bbb;
		margin-top: 3px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_second {
		margin-top: 6px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_second {
		margin-top: 9px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_third {
		padding-top: 23px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_third {
		padding-top: 45px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_third {
		padding-top: 68px
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_third .price {
		color: #333
	}
	
	.gift_box .gb-body .gift_item .gift_list .good_item .good_info .info_box .info_third .num {
		color: #999
	}
	
	.gift_box .gb-body .gift_item .gift_info {
		padding: 11px 14px;
		font-size: 14px;
		color: #333;
		background: #fff
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_info {
		padding-top: 22px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_info {
		padding-top: 33px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_info {
		padding-bottom: 22px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_info {
		padding-bottom: 33px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_info {
		padding-left: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_info {
		padding-left: 42px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_info {
		padding-right: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_info {
		padding-right: 42px
	}
	
	[data-dpr="2"] .gift_box .gb-body .gift_item .gift_info {
		font-size: 28px
	}
	
	[data-dpr="3"] .gift_box .gb-body .gift_item .gift_info {
		font-size: 42px
	}
	
	.gift_box .gift_ok {
		height: 48px;
		line-height: 48px;
		font-size: 18px;
		text-align: center;
		background-color: #ff464e;
		color: #fff
	}
	
	[data-dpr="2"] .gift_box .gift_ok {
		height: 96px
	}
	
	[data-dpr="3"] .gift_box .gift_ok {
		height: 144px
	}
	
	[data-dpr="2"] .gift_box .gift_ok {
		line-height: 96px
	}
	
	[data-dpr="3"] .gift_box .gift_ok {
		line-height: 144px
	}
	
	[data-dpr="2"] .gift_box .gift_ok {
		font-size: 36px
	}
	
	[data-dpr="3"] .gift_box .gift_ok {
		font-size: 54px
	}
	
	.coupons-box {
		display: none;
		background-color: #f4f4f8;
		margin: 0 auto;
		min-height: 12.8rem;
		max-width: 16rem;
		min-width: 6.82667rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999
	}
	
	.coupons-box .shop_name {
		margin-left: 14px;
		margin-right: 14px;
		font-size: 12px;
		height: 40px;
		line-height: 40px;
		color: #666;
		border-bottom: 1px solid #ebebeb
	}
	
	[data-dpr="2"] .coupons-box .shop_name {
		margin-left: 28px
	}
	
	[data-dpr="3"] .coupons-box .shop_name {
		margin-left: 42px
	}
	
	[data-dpr="2"] .coupons-box .shop_name {
		margin-right: 28px
	}
	
	[data-dpr="3"] .coupons-box .shop_name {
		margin-right: 42px
	}
	
	[data-dpr="2"] .coupons-box .shop_name {
		font-size: 24px
	}
	
	[data-dpr="3"] .coupons-box .shop_name {
		font-size: 36px
	}
	
	[data-dpr="2"] .coupons-box .shop_name {
		height: 80px
	}
	
	[data-dpr="3"] .coupons-box .shop_name {
		height: 120px
	}
	
	[data-dpr="2"] .coupons-box .shop_name {
		line-height: 80px
	}
	
	[data-dpr="3"] .coupons-box .shop_name {
		line-height: 120px
	}
	
	.coupons-box .get_coupon {
		height: 48px;
		line-height: 48px;
		font-size: 18px;
		text-align: center;
		background-color: #ff464e;
		color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%
	}
	
	[data-dpr="2"] .coupons-box .get_coupon {
		height: 96px
	}
	
	[data-dpr="3"] .coupons-box .get_coupon {
		height: 144px
	}
	
	[data-dpr="2"] .coupons-box .get_coupon {
		line-height: 96px
	}
	
	[data-dpr="3"] .coupons-box .get_coupon {
		line-height: 144px
	}
	
	[data-dpr="2"] .coupons-box .get_coupon {
		font-size: 36px
	}
	
	[data-dpr="3"] .coupons-box .get_coupon {
		font-size: 54px
	}
	
	.coupons-box .get_coupon.over {
		background-color: #dbdbdb
	}
	
	.coupons-box .cb-title {
		height: 48px;
		line-height: 48px;
		font-size: 16px;
		width: 100%;
		text-align: center;
		color: #333;
		font-weight: 400;
		border-bottom: 1px solid #ebebeb;
		background: #fff
	}
	
	[data-dpr="2"] .coupons-box .cb-title {
		height: 96px
	}
	
	[data-dpr="3"] .coupons-box .cb-title {
		height: 144px
	}
	
	[data-dpr="2"] .coupons-box .cb-title {
		line-height: 96px
	}
	
	[data-dpr="3"] .coupons-box .cb-title {
		line-height: 144px
	}
	
	[data-dpr="2"] .coupons-box .cb-title {
		font-size: 32px
	}
	
	[data-dpr="3"] .coupons-box .cb-title {
		font-size: 48px
	}
	
	.coupons-box .cb-close {
		display: inline-block;
		float: right;
		width: 12px;
		height: 12px;
		/*background: url(../../../images_v1/icon/del.png?161222) no-repeat 50%;*/
		background-size: cover;
		margin-top: 18px;
		margin-right: 18px
	}
	
	[data-dpr="2"] .coupons-box .cb-close {
		width: 24px
	}
	
	[data-dpr="3"] .coupons-box .cb-close {
		width: 36px
	}
	
	[data-dpr="2"] .coupons-box .cb-close {
		height: 24px
	}
	
	[data-dpr="3"] .coupons-box .cb-close {
		height: 36px
	}
	
	[data-dpr="2"] .coupons-box .cb-close {
		margin-top: 36px
	}
	
	[data-dpr="3"] .coupons-box .cb-close {
		margin-top: 54px
	}
	
	[data-dpr="2"] .coupons-box .cb-close {
		margin-right: 36px
	}
	
	[data-dpr="3"] .coupons-box .cb-close {
		margin-right: 54px
	}
	
	.coupons-box .coupons-list {
		margin-top: 10px;
		margin-bottom: 50px;
		overflow-y: auto;
		min-height: 225px;
		max-height: 300px;
		-webkit-overflow-scrolling: touch
	}
	
	[data-dpr="2"] .coupons-box .coupons-list {
		margin-top: 20px
	}
	
	[data-dpr="3"] .coupons-box .coupons-list {
		margin-top: 30px
	}
	
	[data-dpr="2"] .coupons-box .coupons-list {
		margin-bottom: 100px
	}
	
	[data-dpr="3"] .coupons-box .coupons-list {
		margin-bottom: 150px
	}
	
	[data-dpr="2"] .coupons-box .coupons-list {
		min-height: 450px
	}
	
	[data-dpr="3"] .coupons-box .coupons-list {
		min-height: 675px
	}
	
	[data-dpr="2"] .coupons-box .coupons-list {
		max-height: 600px
	}
	
	[data-dpr="3"] .coupons-box .coupons-list {
		max-height: 900px
	}
	
	.pullUp {
		animation: pullUp .5s linear;
		animation-fill-mode: both;
		-webkit-animation-fill-mode: both
	}
	
	@keyframes pullUp {
		0% {
			transform: translateY(100%)
		}
		to {
			transform: translateY(0);
			display: block
		}
	}
	
	.pullDown {
		animation: pullDown .5s linear;
		animation-fill-mode: both;
		-webkit-animation-fill-mode: both
	}
	
	@keyframes pullDown {
		0% {
			transform: translateY(0)
		}
		to {
			transform: translateY(100%);
			display: none
		}
	}
	
	.member-bottom {
		height: 40px;
		line-height: 40px;
		padding-left: 14px;
		padding-right: 14px;
		font-size: 14px;
		width: 100%;
		box-sizing: border-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
		color: #f7dfc4;
		background-image: linear-gradient(-143deg, #464a5a, #272a3a);
		position: fixed
	}
	
	[data-dpr="2"] .member-bottom {
		height: 80px
	}
	
	[data-dpr="3"] .member-bottom {
		height: 120px
	}
	
	[data-dpr="2"] .member-bottom {
		line-height: 80px
	}
	
	[data-dpr="3"] .member-bottom {
		line-height: 120px
	}
	
	[data-dpr="2"] .member-bottom {
		padding-left: 28px
	}
	
	[data-dpr="3"] .member-bottom {
		padding-left: 42px
	}
	
	[data-dpr="2"] .member-bottom {
		padding-right: 28px
	}
	
	[data-dpr="3"] .member-bottom {
		padding-right: 42px
	}
	
	[data-dpr="2"] .member-bottom {
		font-size: 28px
	}
	
	[data-dpr="3"] .member-bottom {
		font-size: 42px
	}
	
	.member-bottom img {
		width: 15px;
		height: 13px
	}
	
	[data-dpr="2"] .member-bottom img {
		width: 30px
	}
	
	[data-dpr="3"] .member-bottom img {
		width: 45px
	}
	
	[data-dpr="2"] .member-bottom img {
		height: 26px
	}
	
	[data-dpr="3"] .member-bottom img {
		height: 39px
	}
	
	.member-bottom-menu {
		bottom: 98px
	}
	
	[data-dpr="2"] .member-bottom-menu {
		bottom: 195px
	}
	
	[data-dpr="3"] .member-bottom-menu {
		bottom: 293px
	}
	
	.member-bottom-nomenu {
		bottom: 49px
	}
	
	[data-dpr="2"] .member-bottom-nomenu {
		bottom: 97px
	}
	
	[data-dpr="3"] .member-bottom-nomenu {
		bottom: 146px
	}
	
	.member-hidden {
		visibility: hidden
	}
	
	.member-selected {
		display: block;
		width: 16px;
		height: 16px;
		/*background: url(../../../images_v1/icon/member_selected.png) no-repeat;*/
		background-size: 100% 100%
	}
	
	[data-dpr="2"] .member-selected {
		width: 32px
	}
	
	[data-dpr="3"] .member-selected {
		width: 48px
	}
	
	[data-dpr="2"] .member-selected {
		height: 32px
	}
	
	[data-dpr="3"] .member-selected {
		height: 48px
	}
	
	.member-unselected {
		/*background: url(../../../images_v1/icon/member_unselected.png) no-repeat;*/
		background-size: cover
	}
	
	.bag-total {
		min-width: 6.82667rem;
		max-width: 16rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 5;
		border-top: 1px solid #ebebeb;
		background: #fff
	}
	
	.has-bottom-menu .bag-total {
		bottom: 49px
	}
	
	[data-dpr="2"] .has-bottom-menu .bag-total {
		bottom: 98px
	}
	
	[data-dpr="3"] .has-bottom-menu .bag-total {
		bottom: 147px
	}
	
	.bag-total .sel-all {
		background-color: #fff;
		height: 49px;
		line-height: 49px;
		font-size: 16px;
		color: #333;
		text-align: center;
		width: 25%;
		float: left
	}
	
	[data-dpr="2"] .bag-total .sel-all {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .sel-all {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .sel-all {
		line-height: 97px
	}
	
	[data-dpr="3"] .bag-total .sel-all {
		line-height: 146px
	}
	
	[data-dpr="2"] .bag-total .sel-all {
		font-size: 32px
	}
	
	[data-dpr="3"] .bag-total .sel-all {
		font-size: 48px
	}
	
	.bag-total .sel-all .iconfont {
		margin-right: 7px;
		font-size: 20px;
		vertical-align: middle;
		color: #9b9b9b
	}
	
	[data-dpr="2"] .bag-total .sel-all .iconfont {
		margin-right: 14px
	}
	
	[data-dpr="3"] .bag-total .sel-all .iconfont {
		margin-right: 21px
	}
	
	[data-dpr="2"] .bag-total .sel-all .iconfont {
		font-size: 40px
	}
	
	[data-dpr="3"] .bag-total .sel-all .iconfont {
		font-size: 60px
	}
	
	.bag-total .sel-all .iconfont:before {
		vertical-align: middle
	}
	
	.bag-total .sel-all .iconfont.icon-yixuanzhong {
		color: #ff464e
	}
	
	.bag-total .bag-money {
		background-color: #fff;
		height: 49px;
		text-align: right;
		font-size: 18px;
		width: 45%;
		padding-right: .21333rem;
		box-sizing: border-box;
		float: left;
		line-height: 1
	}
	
	[data-dpr="2"] .bag-total .bag-money {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .bag-money {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .bag-money {
		font-size: 36px
	}
	
	[data-dpr="3"] .bag-total .bag-money {
		font-size: 54px
	}
	
	.bag-total .bag-money .count {
		height: 49px;
		font-size: 14px
	}
	
	[data-dpr="2"] .bag-total .bag-money .count {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .bag-money .count {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .bag-money .count {
		font-size: 28px
	}
	
	[data-dpr="3"] .bag-total .bag-money .count {
		font-size: 42px
	}
	
	.bag-total .bag-money .count .zje {
		margin-top: 9px;
		display: inline-block
	}
	
	[data-dpr="2"] .bag-total .bag-money .count .zje {
		margin-top: 18px
	}
	
	[data-dpr="3"] .bag-total .bag-money .count .zje {
		margin-top: 27px
	}
	
	.bag-total .bag-money .count .p {
		color: #ff464e
	}
	
	.bag-total .bag-money .count .s {
		color: #999;
		font-size: 10px;
		padding-top: 4px
	}
	
	[data-dpr="2"] .bag-total .bag-money .count .s {
		font-size: 20px
	}
	
	[data-dpr="3"] .bag-total .bag-money .count .s {
		font-size: 30px
	}
	
	[data-dpr="2"] .bag-total .bag-money .count .s {
		padding-top: 8px
	}
	
	[data-dpr="3"] .bag-total .bag-money .count .s {
		padding-top: 12px
	}
	
	.bag-total .go_pay {
		float: right;
		width: 30%;
		display: block;
		height: 49px;
		line-height: 49px;
		background-color: #ff464e;
		font-size: 18px;
		color: #fff;
		text-align: center
	}
	
	[data-dpr="2"] .bag-total .go_pay {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .go_pay {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .go_pay {
		line-height: 97px
	}
	
	[data-dpr="3"] .bag-total .go_pay {
		line-height: 146px
	}
	
	[data-dpr="2"] .bag-total .go_pay {
		font-size: 36px
	}
	
	[data-dpr="3"] .bag-total .go_pay {
		font-size: 54px
	}
	
	.bag-total .del_good {
		float: right;
		width: 30%;
		display: block;
		height: 49px;
		line-height: 49px;
		background-color: #ff464e;
		font-size: 18px;
		color: #fff;
		text-align: center
	}
	
	[data-dpr="2"] .bag-total .del_good {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .del_good {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .del_good {
		line-height: 97px
	}
	
	[data-dpr="3"] .bag-total .del_good {
		line-height: 146px
	}
	
	[data-dpr="2"] .bag-total .del_good {
		font-size: 36px
	}
	
	[data-dpr="3"] .bag-total .del_good {
		font-size: 54px
	}
	
	.bag-total .move_good {
		float: right;
		width: 30%;
		display: block;
		height: 49px;
		line-height: 49px;
		background-color: #f6a623;
		font-size: 18px;
		color: #fff;
		text-align: center
	}
	
	[data-dpr="2"] .bag-total .move_good {
		height: 97px
	}
	
	[data-dpr="3"] .bag-total .move_good {
		height: 146px
	}
	
	[data-dpr="2"] .bag-total .move_good {
		line-height: 97px
	}
	
	[data-dpr="3"] .bag-total .move_good {
		line-height: 146px
	}
	
	[data-dpr="2"] .bag-total .move_good {
		font-size: 36px
	}
	
	[data-dpr="3"] .bag-total .move_good {
		font-size: 54px
	}
	
	.cart_limit_model {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, .45);
		z-index: 999
	}
	
	.cart_limit_box {
		width: 295px;
		background-color: #fff;
		border-radius: 4px;
		overflow: hidden;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #333
	}
	
	[data-dpr="2"] .cart_limit_box {
		width: 590px
	}
	
	[data-dpr="3"] .cart_limit_box {
		width: 885px
	}
	
	.cart_limit_box_title {
		font-size: 16px;
		line-height: 50px;
		height: 50px;
		width: 100%;
		border-bottom: 1px solid #ebebeb;
		box-sizing: border-box;
		text-align: center
	}
	
	[data-dpr="2"] .cart_limit_box_title {
		font-size: 32px
	}
	
	[data-dpr="3"] .cart_limit_box_title {
		font-size: 48px
	}
	
	[data-dpr="2"] .cart_limit_box_title {
		line-height: 100px
	}
	
	[data-dpr="3"] .cart_limit_box_title {
		line-height: 150px
	}
	
	[data-dpr="2"] .cart_limit_box_title {
		height: 100px
	}
	
	[data-dpr="3"] .cart_limit_box_title {
		height: 150px
	}
	
	.cart_limit_box_content {
		max-height: 220px;
		width: 100%;
		overflow-y: scroll
	}
	
	[data-dpr="2"] .cart_limit_box_content {
		max-height: 440px
	}
	
	[data-dpr="3"] .cart_limit_box_content {
		max-height: 660px
	}
	
	.cart_limit_box_btn {
		line-height: 50px;
		height: 50px;
		width: 100%;
		border-top: 1px solid #ebebeb;
		box-sizing: border-box;
		text-align: center;
		display: -ms-flexbox;
		display: flex
	}
	
	[data-dpr="2"] .cart_limit_box_btn {
		line-height: 100px
	}
	
	[data-dpr="3"] .cart_limit_box_btn {
		line-height: 150px
	}
	
	[data-dpr="2"] .cart_limit_box_btn {
		height: 100px
	}
	
	[data-dpr="3"] .cart_limit_box_btn {
		height: 150px
	}
	
	.cart_limit_box_btn .cart_limit_box_btn_item {
		font-size: 16px;
		display: inline-block;
		width: 50%;
		height: 100%;
		border-right: 1px solid #ebebeb
	}
	
	[data-dpr="2"] .cart_limit_box_btn .cart_limit_box_btn_item {
		font-size: 32px
	}
	
	[data-dpr="3"] .cart_limit_box_btn .cart_limit_box_btn_item {
		font-size: 48px
	}
	
	.cart_limit_box_btn .cart_limit_box_btn_right {
		color: #ff464e
	}
	
	.cart_limit_box_btn .cart_limit_box_btn_noEntry {
		color: #dbdbdb
	}
	
	.cart_limit_box_content_list {
		padding: 10px;
		width: 100%;
		padding-top: 0;
		box-sizing: border-box
	}
	
	[data-dpr="2"] .cart_limit_box_content_list {
		padding: 20px
	}
	
	[data-dpr="3"] .cart_limit_box_content_list {
		padding: 30px
	}
	
	.cart_limit_box_content_item {
		height: 70px;
		margin-top: 10px;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: block
	}
	
	[data-dpr="2"] .cart_limit_box_content_item {
		height: 140px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item {
		height: 210px
	}
	
	[data-dpr="2"] .cart_limit_box_content_item {
		margin-top: 20px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item {
		margin-top: 30px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		width: 70px;
		height: 70px;
		margin-right: 10px;
		float: left
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		width: 140px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		width: 210px
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		height: 140px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		height: 210px
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		margin-right: 20px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_leftImg {
		margin-right: 30px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_leftImg img {
		width: 100%;
		height: 100%;
		display: block
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_rightDes {
		width: 170px;
		float: left;
		height: 100%
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes {
		width: 340px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes {
		width: 510px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_rightDes_title {
		font-size: 14px;
		display: -webkit-inline-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: #333;
		word-wrap: break-word;
		word-break: break-all
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_title {
		font-size: 28px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_title {
		font-size: 42px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale {
		font-size: 12px;
		color: #999
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale {
		font-size: 24px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale {
		font-size: 36px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale span {
		margin-right: 15px
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale span {
		margin-right: 30px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_rightDes_scale span {
		margin-right: 45px
	}
	
	.cart_limit_box_content_item .cart_limit_box_content_item_num {
		font-size: 12px;
		color: #999;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%)
	}
	
	[data-dpr="2"] .cart_limit_box_content_item .cart_limit_box_content_item_num {
		font-size: 24px
	}
	
	[data-dpr="3"] .cart_limit_box_content_item .cart_limit_box_content_item_num {
		font-size: 36px
	}
	
	.showNum {
		line-height: 30px
	}
	
	[data-dpr="2"] .showNum {
		line-height: 60px
	}
	
	[data-dpr="3"] .showNum {
		line-height: 90px
	}
	
	.changeNum {
		display: none
	}
	/*# sourceMappingURL=../../maps/page/m/cart_new.css.map */
</style>