<template>
	<div class="goods-sort-scroll" style="height: 87px;">
		<div class="goods-sort-scroll-box">
			<div class="goods-sort hide" style="display: block;">
				<div class="goods-sort-box">
					<table>
						<tbody>
							<tr>
								<td @click="selectSortTab(index)" v-for="(s,index) in sortTabs" :class="[{active:index===sortTab},`${s.path}`]">{{s.title}}</td>
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
</template>

<script>
	export default{
		data(){
			return{
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
				},
				{
					title:"筛选",
					path:"screen"
				}
				],
				sortTab:0
			}
		},
		methods:{
			selectSortTab(sortTab){
				this.sortTab = sortTab;
				this.$router.push({name:this.sortTabs[sortTab].path,query: {cid:this.$route.query.cid,name:this.$route.query.name}});
			}
		}
	}
</script>
