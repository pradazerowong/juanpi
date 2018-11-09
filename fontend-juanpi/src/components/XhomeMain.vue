<template>
	<div id="AppInner" class="AppContent" style="padding-top: 0px; position: relative;">
		<div id="appTopNav" style="position: fixed; left: 0px; top: 0px; z-index: 100; display: none;">
			<div class="sc-eHgmQL liitCY">
				<ul class="sc-cvbbAY FmGXT">
					<div class="sc-brqgnP fTbvTr" style="left: 0px; width: 0px; background-color: red;"></div>
					<a href="">
						<li class="sc-jWBwVP dPjlSY">首页</li>
					</a>
				</ul>
			</div>
		</div>
		<div class="sc-cSHVUG hLatub">
			<Xbanner />
		</div>
		<div class="sc-iRbamj idVxVO" style="margin-top: 0rem; height: 3.5696rem; width: 16rem;">
			<div class="sc-jlyJG qykHL" style="width: 4rem; height: 3.5696rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://goods5.juancdn.com/jas/180222/8/5/5a8e9c188150a133c81553be_270x241.png?iopcmd=convert&amp;Q=85&amp;dst=png&quot;);">
				</a>
			</div>
			<div class="sc-jlyJG qykHL" style="width: 4rem; height: 3.5696rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png&quot;);">
				</a>
			</div>
			<div class="sc-jlyJG qykHL" style="width: 4rem; height: 3.5696rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png&quot;);">
				</a>
			</div>
			<div class="sc-jlyJG qykHL" style="width: 4rem; height: 3.5696rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png&quot;);">
				</a>
			</div>
		</div>
		<div class="sc-iRbamj idVxVO" style="margin-top: 0rem; height: 4.4448rem; width: 16rem;">
			<div class="sc-jlyJG qykHL" style="width: 16rem; height: 4.4448rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://s2.juancdn.com/jas/181031/f/6/5bd971b033b089066657d75a_1080x300.gif&quot;);">
				</a>
			</div>
		</div>
		<div class="sc-iRbamj idVxVO" style="margin-top: 0rem; height: 9.7184rem; width: 16rem;">
			<div class="sc-jlyJG qykHL" style="width: 8rem; height: 9.7184rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 100%; background-image: url(&quot;https://s2.juancdn.com/jas/180927/a/c/5bac3a4eb6f8ea46f454239e_540x656.gif&quot;);">
				</a>
			</div>
			<div class="sc-jlyJG qykHL" style="width: 8rem; height: 9.7184rem;">
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 50%; background-image: url(&quot;https://goods6.juancdn.com/jas/181031/b/a/5bd98078b6f8ea6fe441767d_540x328.png?imageMogr2/quality/85!/format/png&quot;);">
				</a>
				<a class="sc-gipzik eqWGtT" href="" style="width: 100%; height: 50%; background-image: url(&quot;https://goods3.juancdn.com/jas/181026/4/c/5bd3029233b08916b762fd40_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=png&quot;);">
				</a>
			</div>
		</div>
		<div class="sc-iRbamj idVxVO" style="margin-top: 0.426667rem; height: 2.0448rem; width: 16rem;">
			<div class="sc-jlyJG qykHL" style="width: 16rem; height: 2.0448rem;">
				<a class="sc-gipzik eqWGtT" href="javascript:;" style="width: 100%; height: 100%; background-image: url(&quot;https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&amp;Q=85&amp;dst=png&quot;);">
				</a>
			</div>
		</div>
		<div class="sc-kGXeez ggzDPo" id="goodsNavWrapper">
			<ul id="goodsNav" class="sc-kpOJdX bQiGsQ" :class="goodsNavFixed == true?'isFixed':''">
				<li @click="selectHomeList(index)" v-for="(h,index) in homeLists" class="sc-dxgOiQ kJVijN" :class="{
					goodsNavActive:index===homeList
				}">
					<div class="sc-ckVGcZ ivTuNn">{{h.title}}</div>
				</li>
			</ul>
		</div>
		<keep-alive>   
        	<component v-bind:is="currentList"></component>  
      	</keep-alive> 
	</div>
</template>
<script>
	import axios from "axios";
	import Xbanner from "./Xbanner.vue";
	import XlistBox from "./XlistBox.vue";
	import XhomeSelect1 from "./XhomeSelect1.vue";
	import XhomeSelect2 from "./XhomeSelect2.vue";
	export default {
		components:{
			Xbanner,
			XlistBox,
			homeSelect1:XhomeSelect1,
			homeSelect2:XhomeSelect2
		},
		data(){
			return{
				homeLists:[{
					title:"精选秀场",
					listType:"homeSelect1"
				},{
					title:"精选单品",
					listType:"homeSelect2"
				}],
				goodsNavFixed:false,
				homeList:0,
				currentList:"homeSelect1"
			}
		},
		mounted () {
	  		window.addEventListener('scroll', this.handleScroll,true);
		},
		methods:{
			selectHomeList(homeList){
				this.homeList = homeList;
				this.currentList = this.homeLists[homeList].listType;
			},
			handleScroll () {
		  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		  		var offsetTop = document.querySelector('#goodsNav').offsetTop;
		  		if(scrollTop>offsetTop){
		  			this.goodsNavFixed = true;
		  		}else{
		  			this.goodsNavFixed = false;
		  		}
			}
		},
		destroyed(){
			window.removeEventListener('scroll',this.handleScroll,true);
		}
	}
</script>

<style scoped>
 	@import url("../assets/select=1.css");
 	@import url("../assets/cwvtfm.css");
.isFixed{
	position:fixed;
	top:0;
	z-index:999
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}


.react-swipeable-view-container {
    display: -webkit-box;
    display: -ms-flexbox;
}
.react-swipeable-view-container > div {
    -ms-flex-negative: 0;
	}
    @import url("../assets/jvdqxb.css");

</style>