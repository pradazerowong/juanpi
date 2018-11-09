<template>
	<div class="head" id="head">
		<div id="search-box">
			<form class="search-block" action="/search">
				<div class="search-input" style="margin-right: 0.5rem;">
					<button id="search-submit" type="submit" class="search-icon">
						<i class="iconfont icon-sousuo"></i>
					</button>
					<input type="search" id="keyword" name="keyword" x-webkit-speech="" placeholder="搜索商品" autocomplete="off" value="">
					<a href="javascript:;" class="del" id="del">
						<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/del.png?69cb737e-1&amp;sv=449ce9ee">
					</a>
				</div>
			</form>
			<a class="search-canle" href="javascript:window.history.go(-1)">取消</a>
		</div>
	</div>
</template>
<style>
	@import url("../assets/keywords.css");
	#search-box {
    margin: 0;
    border: none;
    border-radius: 0;
    background-color: #fff;
    padding: 0;
    overflow: visible; 
}
.search-canle {
    margin-top: 0;
}
#search-box button {
    top: 0.33rem;
}
</style>