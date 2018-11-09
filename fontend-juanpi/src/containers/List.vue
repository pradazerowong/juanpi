<template>
	<div class="app">
		<XlistHeader/>
		<XlistNav />
		<router-view></router-view>
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
						<div class="ensure" @click="screen1">确定</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>
<script>
	import XlistHeader from "../components/XlistHeader.vue";
	import XlistNav from "../components/XlistNav.vue";

	export default {
		components: {
			XlistHeader,
			XlistNav

		},
		data() {
			return {
				shows: false
			}
		},
		methods: {
			screen() {
				this.shows = !this.shows;
			},
			screen1() {
				this.shows = !this.shows;
			}

		}

	};
</script>
<style>
	@import url("../assets/index.css");
	@import url("../assets/cate_list.css");
</style>