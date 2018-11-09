<template>
<div>
<div class="alert_normal_fullbg" v-show="shows">
		</div>
		<div class="filter" v-show="shows">
			<div class="filter_left"></div>
			<div class="filter_right">
				<div class="filter_title">筛选</div>
				<div class="filter_only">
					<div class="only_item" data-id="5">会员专属</div>
					<div class="only_item" data-id="2">卷皮优选</div>
					<div class="only_item" data-id="1">卷皮直发</div>
				</div>

				<div class="price_title">价格区间(元)</div>
				<div class="price_input">
					<input type="number" name="low" x-webkit-speech="" placeholder="最低价" autocomplete="off" value="" class="low">
					<div class="line"></div>
					<input type="number" name="high" x-webkit-speech="" placeholder="最高价" autocomplete="off" value="" class="high">
				</div>
				<div class="category clear">
					<div class="category_title">分类</div>
					<div class="category_more" style="display: none;">
						更多
						<span class="iconfont icon-liebiaojiantou"></span>
					</div>
				</div>
				<div class="categorys clear">

					<div id="913">女士羽绒服</div>
					<div id="912">女士棉服</div>
					<div id="911">女士皮衣/皮草</div>
				</div>
				<div class="filter_bnt">
					<div class="reset">重置</div>
					<div class="ensure">确定</div>
				</div>
			</div>
		</div>
</div>

</template>

<script>
	export default {
		data() {
			return {
				shows: true
			}
		},
		methods: {
			screen(){
				this.shows = !this.shows;
			}
		}
	}
</script>

<style>
	@keyframes entrys {
		0% {
			right: -14.08rem
		}
		to {
			right: 0
		}
	}
	
	.filter_left {
		width: 1.92rem;
		height: 100%;
		float: left;
		background: transparent
	}
	
	.filter_right {
		float: left;
		width: 14.08rem;
		padding-top: 32px;
		background: #fff;
		height: 100%
	}
	
	[data-dpr="2"] .filter_right {
		padding-top: 64px
	}
	
	[data-dpr="3"] .filter_right {
		padding-top: 96px
	}
	
	.filter {
		position: fixed;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 999;
		text-align: center;
		animation: entrys 2s;
		width: 100%;
		font-size: 14px;
		color: #333;
		display:block;
	}
	
	[data-dpr="2"] .filter {
		font-size: 28px
	}
	
	[data-dpr="3"] .filter {
		font-size: 42px
	}
	
	.filter .filter_title {
		text-align: left;
		padding-left: .59733rem;
		margin-bottom: .59733rem
	}
	
	.filter .filter_only {
		padding-left: .59733rem;
		text-align: left;
		margin-bottom: 36px
	}
	
	[data-dpr="2"] .filter .filter_only {
		margin-bottom: 72px
	}
	
	[data-dpr="3"] .filter .filter_only {
		margin-bottom: 108px
	}
	
	.filter .only_item {
		text-align: center;
		width: 3.88267rem;
		height: 1.19467rem;
		line-height: 1.19467rem;
		background: #f4f4f8;
		border-radius: .04267rem;
		display: inline-block;
		margin-right: .55467rem;
		font-size: 12px;
		border: 1px solid #f4f4f8;
		margin-top: .08533rem
	}
	
	[data-dpr="2"] .filter .only_item {
		font-size: 24px
	}
	
	[data-dpr="3"] .filter .only_item {
		font-size: 36px
	}
	
	.filter .only_item.active {
		background: #fff;
		color: #ff464e;
		border: 1px solid #ff464e
	}
	
	.filter .price_title {
		text-align: left;
		padding-left: .59733rem
	}
	
	.filter .price_input {
		height: 28px;
		margin: 16px .59733rem 36px
	}
	
	[data-dpr="2"] .filter .price_input {
		height: 56px
	}
	
	[data-dpr="3"] .filter .price_input {
		height: 84px
	}
	
	[data-dpr="2"] .filter .price_input {
		margin-top: 32px
	}
	
	[data-dpr="3"] .filter .price_input {
		margin-top: 48px
	}
	
	[data-dpr="2"] .filter .price_input {
		margin-bottom: 72px
	}
	
	[data-dpr="3"] .filter .price_input {
		margin-bottom: 108px
	}
	
	.filter .price_input input {
		float: left;
		background: #f4f4f8;
		border-radius: 2px;
		height: 28px;
		width: 5.632rem;
		font-size: 12px;
		line-height: 28px;
		text-align: center;
		border: 0
	}
	
	[data-dpr="2"] .filter .price_input input {
		border-radius: 4px
	}
	
	[data-dpr="3"] .filter .price_input input {
		border-radius: 6px
	}
	
	[data-dpr="2"] .filter .price_input input {
		height: 56px
	}
	
	[data-dpr="3"] .filter .price_input input {
		height: 84px
	}
	
	[data-dpr="2"] .filter .price_input input {
		font-size: 24px
	}
	
	[data-dpr="3"] .filter .price_input input {
		font-size: 36px
	}
	
	[data-dpr="2"] .filter .price_input input {
		line-height: 56px
	}
	
	[data-dpr="3"] .filter .price_input input {
		line-height: 84px
	}
	
	.filter .price_input .high {
		float: right
	}
	
	.filter .price_input .line {
		float: left;
		width: .59733rem;
		margin-left: .512rem;
		margin-right: .512rem;
		height: 1px;
		margin-top: 14px;
		background: #999
	}
	
	[data-dpr="2"] .filter .price_input .line {
		height: 1px
	}
	
	[data-dpr="3"] .filter .price_input .line {
		height: 2px
	}
	
	[data-dpr="2"] .filter .price_input .line {
		margin-top: 27px
	}
	
	[data-dpr="3"] .filter .price_input .line {
		margin-top: 41px
	}
	
	.filter .category {
		padding-left: .59733rem;
		padding-right: .59733rem;
		margin-bottom: 4px;
		height: 20px;
		line-height: 20px
	}
	
	[data-dpr="2"] .filter .category {
		margin-bottom: 8px
	}
	
	[data-dpr="3"] .filter .category {
		margin-bottom: 12px
	}
	
	[data-dpr="2"] .filter .category {
		height: 40px
	}
	
	[data-dpr="3"] .filter .category {
		height: 60px
	}
	
	[data-dpr="2"] .filter .category {
		line-height: 40px
	}
	
	[data-dpr="3"] .filter .category {
		line-height: 60px
	}
	
	.filter .category .category_title {
		float: left
	}
	
	.filter .category .category_more {
		float: right;
		color: #999;
		font-size: 12px
	}
	
	[data-dpr="2"] .filter .category .category_more {
		font-size: 24px
	}
	
	[data-dpr="3"] .filter .category .category_more {
		font-size: 36px
	}
	
	.filter .category .category_more .icon-liebiaojiantou {
		margin-left: 3px;
		font-size: 12px
	}
	
	[data-dpr="2"] .filter .category .category_more .icon-liebiaojiantou {
		margin-left: 6px
	}
	
	[data-dpr="3"] .filter .category .category_more .icon-liebiaojiantou {
		margin-left: 9px
	}
	
	[data-dpr="2"] .filter .category .category_more .icon-liebiaojiantou {
		font-size: 24px
	}
	
	[data-dpr="3"] .filter .category .category_more .icon-liebiaojiantou {
		font-size: 36px
	}
	
	.filter .category .category_more .icon-liebiaojiantou:before {
		transform: rotate(90deg);
		display: inline-block
	}
	
	.filter .category .category_more .icon-liebiaojiantou.showall:before {
		transform: rotate(270deg);
		display: inline-block
	}
	
	.filter .categorys.showall {
		height: 10.53867rem;
		overflow: auto
	}
	
	.filter .categorys {
		height: 129px;
		padding-left: .59733rem;
		padding-right: .59733rem;
		font-size: 12px;
		overflow: hidden
	}
	
	[data-dpr="2"] .filter .categorys {
		height: 258px
	}
	
	[data-dpr="3"] .filter .categorys {
		height: 387px
	}
	
	[data-dpr="2"] .filter .categorys {
		font-size: 24px
	}
	
	[data-dpr="3"] .filter .categorys {
		font-size: 36px
	}
	
	.filter .categorys div {
		float: left;
		margin-top: 12px;
		margin-right: 5%;
		border-radius: 2px;
		background: #f4f4f8;
		width: 30%;
		height: 28px;
		line-height: 28px;
		border: 1px solid #f4f4f8;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	
	[data-dpr="2"] .filter .categorys div {
		margin-top: 24px
	}
	
	[data-dpr="3"] .filter .categorys div {
		margin-top: 36px
	}
	
	[data-dpr="2"] .filter .categorys div {
		border-radius: 4px
	}
	
	[data-dpr="3"] .filter .categorys div {
		border-radius: 6px
	}
	
	[data-dpr="2"] .filter .categorys div {
		height: 56px
	}
	
	[data-dpr="3"] .filter .categorys div {
		height: 84px
	}
	
	[data-dpr="2"] .filter .categorys div {
		line-height: 56px
	}
	
	[data-dpr="3"] .filter .categorys div {
		line-height: 84px
	}
	
	.filter .categorys div:nth-child(3n+0) {
		margin-right: 0
	}
	
	.filter .categorys div.active {
		background: #fff;
		border: 1px solid #ff464e;
		color: #ff464e
	}
	
	.filter .filter_bnt {
		border-top: 1px solid #ebebeb;
		width: 14.08rem;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		position: absolute;
		bottom: 0
	}
	
	[data-dpr="2"] .filter .filter_bnt {
		height: 88px
	}
	
	[data-dpr="3"] .filter .filter_bnt {
		height: 132px
	}
	
	[data-dpr="2"] .filter .filter_bnt {
		line-height: 88px
	}
	
	[data-dpr="3"] .filter .filter_bnt {
		line-height: 132px
	}
	
	[data-dpr="2"] .filter .filter_bnt {
		font-size: 32px
	}
	
	[data-dpr="3"] .filter .filter_bnt {
		font-size: 48px
	}
	
	.filter .filter_bnt .reset {
		width: 50%;
		float: left
	}
	
	.filter .filter_bnt .ensure {
		width: 50%;
		float: left;
		background: #ff464e;
		color: #fff
	}
</style>