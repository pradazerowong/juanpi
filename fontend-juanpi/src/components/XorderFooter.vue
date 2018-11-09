<template>
	<div id="foot">
        <div class="cut-line"></div>
    <div class="foot-copyright"></div>
    <h2>copyright © 武汉奇米网络科技有限公司</h2>
</div>

</template>

<script>
</script>

<style scoped>
	#foot {
	margin-top: 10px;
	width: 100%;
	height: 4.55rem
}

[data-dpr="2"] #foot {
	margin-top: 20px
}

[data-dpr="3"] #foot {
	margin-top: 30px
}

.foot-copyright {
	background: #ebebeb;
	height: 1px;
	width: 90%;
	margin: 0 auto;
	font-size: 0;
	line-height: 1px
}

.foot-nav {
	padding-top: .625rem;
	padding-bottom: .625rem;
	line-height: .625rem
}

.foot-nav a {
	color: #666;
	font-size: .55rem;
	line-height: .625rem;
	margin: 0 auto;
	width: 31%;
	border-right: 1px solid #ebebeb
}

.foot-nav a:last-child {
	border-right: none
}

#foot .cut-line {
	width: 90%;
	border-bottom: 1px solid #ebebeb;
	margin: 0 auto 1rem;
	height: 1px;
	font-size: 0
}

#foot h2 {
	font-size: .5rem;
	height: .6rem;
	line-height: .6rem;
	top: -.875rem;
	color: #bbb;
	padding: 0 .2rem;
	font-weight: 400
}
#foot,
#foot h2,
#shortcut a,
.express-detail-box .express-info .go-baglist,
.express-detail-box .express-info .package-goods ul li,
.foot-nav,
.foot-nav a,
.item-triangle,
.order-detail-box .order-address .edit-address,
.order-process a {
	position: relative
}

#shortcut {
	position: fixed
}

#shortcut a.bag-enter em,
.express-detail-box .express-info .go-baglist:after,
.express-detail-box .express-info .package-goods ul li p,
.item-triangle .item-tri,
.order-detail-box .order-address .edit-address .icon-liebiaojiantou {
	position: absolute
}

#foot h2,
.express-detail-box .express-info .js-show-more img,
.foot-nav a,
.item-goods .item-g {
	display: inline-block
}

#shortcut a,
.express-detail-box .express-info .express-wait-goods li img,
.express-detail-box .express-info .go-baglist,
.express-detail-box .express-info .package-goods ul li img,
.express-detail-box .express-info.parthide .express-follow-box .express-follow li.cur,
.express-detail-box .express-info.parthide .js-show-more,
.foot-copyright,
.item-bolck img,
.order-detail-box .order-address .edit-address {
	display: block
}

#shortcut a.bag-enter .time-out,
#shortcut a.bag-enter em,
.express-detail-box .express-info .js-show-more,
.express-detail-box .express-info.parthide .express-comp,
.express-detail-box .express-info.parthide .express-follow-box .express-follow li,
.express-detail-box .express-info.parthide .express-follow-box .express-item-title,
.express-detail-box .express-info.parthide .express-tips {
	display: none
}

.item-goods .item-price .new-price,
.order-process .opbd-text,
.slide-bolck .slide-goods .item-price .new-price {
	color: #ff464e
}

#shortcut a.bag-enter .time-out,
#shortcut a.bag-enter em,
.express-detail-box .express-info .package-goods ul li p {
	color: #fff
}

.express-detail-box .express-info .express-comp span,
.express-detail-box .express-info .express-item-title,
.express-detail-box .express-info .express-tips .title,
.express-detail-box .express-info .js-show-more,
.my-order .order-state .state.complete,
.order-detail-box .order-address .edit-address,
.order-process a {
	color: #333
}

.express-detail-box .express-info .express-item,
.express-detail-box .express-info .express-tips,
.express-detail-box .express-info .go-baglist .picnum {
	color: #999
}

#foot,
#foot h2,
.item-bolck {
	background: #fff
}

#foot,
#shortcut a.bag-enter em,
.express-detail-box .express-info .js-show-more,
.express-detail-box .express-info .package-goods ul li p,
.foot-nav a,
.item-goods .item-g {
	text-align: center
}

.order-detail-box .order-address .edit-address {
	text-align: right
}

.express-detail-box .express-info .go-baglist:after,
.foot-copyright,
.order-detail-box .order-address .edit-address .icon-liebiaojiantou {
	content: ""
}

.express-detail-box .express-info .express-wait-goods ul,
.express-detail-box .express-info .go-baglist,
.express-detail-box .express-info .package-goods ul,
.express-detail-box .express-info .package-goods ul li,
.foot-copyright,
.item-bolck,
.item-goods,
.order-process a {
	overflow: hidden
}
</style>