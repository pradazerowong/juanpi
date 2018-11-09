<template>
	<header id="head" class="head">
		<div class="fixtop">
			<span id="t-find">
                            <a class="btn-left" href="javascript:window.history.go(-1)">
                                <span class="iconfont icon-fanhui"></span>
			</a>
			</span>
			<div id="search-box">
				<form action="/search">
					<div class="box-search">
						<input type="text" id="keyword" name="keyword" x-webkit-speech="" placeholder="搜索商品" autocomplete="off" value="">
						<input type="hidden" name="storeid" value="370657816">
						<a href="javascript:;" class="del" style="display: none;">
							<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/del.png?69cb737e-5">
						</a>
					</div>
					<button id="search-submit" type="submit">
                                    <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-5">
                                </button>
				</form>
			</div>
			<div class="menu-more" @click="show()">
				<span class="iconfont icon-gengduo js-showmenu"></span>
				<div class="menu-item" v-if="shows">
					<div class="menu-angle"></div>
					<ul>
						<li v-for="(n,index) in nav" :key="(n,index)" @click="go(index)">
							<a>
								<span class="iconfont " :class="`icon-${n.icon}`"></span> {{n.name}}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
						name: "首页",
						path: "",
						icon: "zhuye"
					},
					{
						name: "我的收藏",
						path: "",
						icon: "shoucang"

					},
					{
						name: "我的订单",
						path: "",
						icon: "dingdan"

					}
				],
				shows: false,
				num: 0
			}
		},
		methods: {
			show() {
				this.shows = !this.shows;
			}
		}
	}
</script>

<style scoped>
	.btn-left {
		position: fixed;
		top: 0;
	}
	
	#search-box {
		margin-top: 8px;
		margin-right: 54px;
		border-radius: 4px;
		background-color: #f2f2f2;
		padding-top: 3px;
		padding-bottom: 3px;
		margin-left: 50px;
	}
	
	[data-dpr="2"] #search-box {
		margin-top: 16px
	}
	
	[data-dpr="3"] #search-box {
		margin-top: 24px
	}
	
	[data-dpr="2"] #search-box {
		margin-right: 108px
	}
	
	[data-dpr="3"] #search-box {
		margin-right: 162px
	}
	
	[data-dpr="2"] #search-box {
		padding-top: 5px
	}
	
	[data-dpr="3"] #search-box {
		padding-top: 8px
	}
	
	[data-dpr="2"] #search-box {
		padding-bottom: 5px
	}
	
	[data-dpr="3"] #search-box {
		padding-bottom: 8px
	}
	
	#search-box button {
		top: 5px
	}
	
	[data-dpr="2"] #search-box button {
		top: 10px
	}
	
	[data-dpr="3"] #search-box button {
		top: 15px
	}
	
	#search-box button img {
		height: 19px
	}
	
	[data-dpr="2"] #search-box button img {
		height: 38px
	}
	
	[data-dpr="3"] #search-box button img {
		height: 57px
	}
	
	#search-box .box-search {
		width: 94%;
		background-color: #f2f2f2
	}
	
	#search-box .box-search input {
		margin-left: 25px;
		-webkit-tap-highlight-color: transparent;
		-webkit-appearance: none;
		color: #999;
		font-size: 14px;
		width: 92%;
		left: 0;
		background-color: #f2f2f2
	}
	
	[data-dpr="2"] #search-box .box-search input {
		margin-left: 50px
	}
	
	[data-dpr="3"] #search-box .box-search input {
		margin-left: 75px
	}
	
	[data-dpr="2"] #search-box .box-search input {
		font-size: 28px
	}
	
	[data-dpr="3"] #search-box .box-search input {
		font-size: 42px
	}
	
	#search-box .box-search .del {
		right: 0
	}
	
	#search-box {
		position: relative;
		height: auto;
		overflow: hidden
	}
	
	#search-box button {
		display: block;
		position: absolute;
		top: 0;
		left: 6px;
		border: 0 none;
		background: none;
		cursor: pointer
	}
	
	[data-dpr="2"] #search-box button {
		left: 12px
	}
	
	[data-dpr="3"] #search-box button {
		left: 18px
	}
	
	#search-box button img {
		height: 24px;
		vertical-align: middle
	}
	
	[data-dpr="2"] #search-box button img {
		height: 48px
	}
	
	[data-dpr="3"] #search-box button img {
		height: 72px
	}
</style>