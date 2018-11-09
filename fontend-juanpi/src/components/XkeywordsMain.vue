<template>
	<div class="search">
		<p class="search__title">热搜</p>
		<ul class="search__ul js-search-history" id="hot-keywords">
			<a class="search__tag red bc" href="" data-bc="[&quot;trackEvent&quot;, &quot;search&quot;, &quot;click_hot_search&quot;,&quot;searchterm&quot;,&quot;秋日男装精选&quot;]">秋日男装精选</a>
			<a class="search__tag red bc" href="" data-bc="[&quot;trackEvent&quot;, &quot;search&quot;, &quot;click_hot_search&quot;,&quot;searchterm&quot;,&quot;羽绒服女&quot;]">羽绒服女</a>
			<a class="search__tag bc" href="" data-bc="[&quot;trackEvent&quot;, &quot;search&quot;, &quot;click_hot_search&quot;,&quot;searchterm&quot;,&quot;太子龙男装&quot;]">太子龙男装</a>
		</ul>
		<div id="search-history" style="display:none;">
			<p class="search__title">搜索历史 <i class="iconfont icon-shanchu_ del-history"></i></p>
			<ul class="search__ul js-search-history"></ul>
		</div>
		<div id="module-ad"></div>
		<div id="module-ad"></div>
	</div>
</template>
<style>
	@import url("../assets/keywords.css");
</style>