<template>
	<div class="app">
		<XlistHeader/>
		<div class="goods-sort-scroll" style="height: 87px;">
		<div class="goods-sort-scroll-box">
			<div class="goods-sort hide" style="display: block;">
				<div class="goods-sort-box">
					<table>
						<tbody>
							<tr>
								<td @click="selectSortTab(index)" v-for="(s,index) in sortTabs" :class="[{active:index===sortTab},`${s.path}`]">{{s.title}}</td>
								<td @click="showFilter" :class="{
									active:isShowFilterSelect===true
								}">筛选</td>
								<td><span class="sort-icon"></span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="cate-label ">
				<div class="cate-label-box ">
					<nav>
						<a class="active ">全部</a>
						<a>羽绒棉服</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
		<router-view></router-view>
		<div>
			<div class="alert_normal_fullbg" v-show="shows">
			</div>
			<div class="filter" v-show="shows">
				<div @click="showFilter" class="filter_left"></div>
				<div class="filter_right">
					<div class="filter_title">筛选</div>
					<div class="filter_only">
						<div @click="selectFilterCheck(index)" v-for="(f,index) in filters" class="only_item" :data-id="index" :class="{
							active:f.isSelectFilter===true
						}">{{f.title}}</div>
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

						<div @click="selectCategoriesCheck(index)" v-for="(c,index) in categories" :id="index" class="categories_item" :class="{
							active:c.isSelectCategories===true
						}">{{c.title}}</div>
					</div>
					<div class="filter_bnt">
						<div @click="filterReset()" class="reset">重置</div>
						<div class="ensure" @click="screen1()">确定</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>
<script>
	import XlistHeader from "../components/XlistHeader.vue";
	

	export default {
		components: {
			XlistHeader
		

		},
		data() {
			return {
				sortTabs:[{
					title:"推荐",
					path:"all",
				},
				{
					title:"价格",
					path:"price"
				},
				{
					title:"销量",
					path:"sales"
				},
				{
					title:"上新",
					path:"starttime"
				}
				],
				sortTab:0,
				shows: false,
				filters:[{
					title:"会员专属",
					isSelectFilter:false
				},
				{
					title:"卷皮优选",
					isSelectFilter:false
				},{
					title:"卷皮直发",
					isSelectFilter:false
				}
				],
				categories:[{
					title:"女士羽绒服",
					isSelectCategories:false
				},
				{
					title:"女士棉服",
					isSelectCategories:false
				},{
					title:"女士皮衣/皮草",
					isSelectCategories:false
				}],
				isShowFilterSelect:false
			}
		},
		methods: {
			selectSortTab(sortTab){
				this.sortTab = sortTab;
				if(sortTab===4){
					this.shows = !this.shows;
				}else{
					this.$router.push({name:this.sortTabs[sortTab].path,query: {cid:this.$route.query.cid,name:this.$route.query.name}});	
				}
			},
			showFilter(){
				this.shows = !this.shows;
			},
			screen1() {
				this.shows = !this.shows;
				console.log(this.$router);
				var isFliterActive = document.querySelector(".only_item.active");
				var isCategoriesActive = document.querySelector(".categories_item.active");
				
				if(isFliterActive===null&&isCategoriesActive===null){
					this.isShowFilterSelect=false;
				}else{
					this.isShowFilterSelect=true;
				}
				this.$router.push({path:this.$router.history.current.path,query: {cid:this.$route.query.cid,name:this.$route.query.name}});
				
			},
			selectCategoriesCheck(index){
				this.categories[index].isSelectCategories = !this.categories[index].isSelectCategories;	
			},
			selectFilterCheck(index){
				this.filters[index].isSelectFilter = !this.filters[index].isSelectFilter;	
			},
			filterReset(){
				this.shows = !this.shows;
				for(var i=0;i<this.filters.length;i++){
					this.filters[i].isSelectFilter = false;
				}
				for(var i=0;i<this.categories.length;i++){
					this.categories[i].isSelectCategories = false;
				}
				this.isShowFilterSelect=false;
			}

		}

	};
</script>
<style>
	@import url("../assets/index.css");
	@import url("../assets/cate_list.css");
</style>