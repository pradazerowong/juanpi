<template>
	<header id="head" class="head">
		<div class="fixtop">
			<span id="t-find" style="top:-10px">
                <a class="btn btn-left" href="#/categories">
                     <span class="iconfont icon-fanhui"></span>
			</a>
			</span>
			<span id="t-index">{{this.$route.query.name}}</span>
			<a class="keywords" href="//m.juanpi.com/keywords">
				<span class="iconfont icon-sousuo"></span>
			</a>
			<div class="menu-more" @click="show()"  >
				<span class="iconfont icon-gengduo js-showmenu"></span>
				<div class="menu-item" v-if="shows">
					<div class="menu-angle"></div>
					<ul>
						<li v-for="(n,index) in nav" :key="(n,index)" @click="go(index)">
							<a >
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
		data(){
			return{
				nav:[{
					name:"首页",
					path:"",
					icon:"zhuye"
				},
				{
					name:"我的收藏",
					path:"",
					icon:"shoucang"
					
				},
				{
					name:"我的订单",
					path:"",
					icon:"dingdan"
					
				}],
				shows:false ,
				num:0
				
			}
		},
		
		methods:{
			
			show(){
				this.shows =!this.shows;
			},
			go(num){
				this.num = num
				if(num===0){
				this.$router.history.push('home');

				}
				else if(num===1){
//				this.$router.history.push('list');
				
				
				}
				else if(num===2){
					
//				this.$router.history.push('signin');
				}
			}
		}
	}
</script>

<style >

</style>