<template>
	<div>
		<section></section>
		<div class="sc-drlKqa hoFmJx">
			<div class="sc-gldTML fNYoVS">
				<p class="sc-feryYK kZCgYS">
					<span class="sc-cJOK evvHOT">24小时发货</span>
					<span class="sc-cJOK evvHOT">7天包退</span>
					<span class="sc-cJOK evvHOT">售后补贴</span>
				</p>
				<img class="sc-ccSCjj glmRdv" @click="showServeBox" src="https://web.juanpi.com/static/media/more.66830346.png">
			</div>
		</div>
		<div class="sc-drlKqa hoFmJx"></div>
		<div class="sc-drlKqa hoFmJx"  @click="showTypeBox">
			<div class="sc-gisBJw beBVBG">
				<p class="sc-kjoXOD gSaRQX">请选择：颜色、尺码</p>
				<span>
				<img class="sc-cHGsZl wstDz" src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png">
				</span>
			</div>
		</div>
		<div class="sc-drlKqa hoFmJx">
			<div>
				<div class="sc-RefOD gHyDBV">
					<div class="sc-iQKALj iWGNAQ">
						<img class="sc-bwCtUz iwQlpP" src="https://goods8.juancdn.com/bao/170321/f/3/58d07fbdad0a49a7288b45eb_180x90.png?imageMogr2/quality/88!/format/png">
					</div>
					<div class="sc-hrWEMg ewzTJI">
						<div class="sc-eTuwsz eAUfqE">R．Jstory/热嘉女装专营店</div>
						<div class="sc-gwVKww WySNi">共200+件商品</div>
					</div>
					<div>
						<a class="sc-hXRMBi dsGqKv" href="https://m.juanpi.com/store/370657816">
							<span class="sc-epnACN ebsHjU">进入店铺</span>
							<img class="sc-iQNlJl efcxPt" src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png">
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="sc-drlKqa hoFmJx">
			<div class="sc-gGBfsJ kNAwVG">
				<div class="sc-jnlKLf eOlkiO">
					<div @click="selectDetailList(index)" v-for="(d,index) in detailLists" class="sc-fYxtnH hkCpbl" rel="active" :class="{
						iiCfMw:index===detailList
					}">
						<span class="sc-tilXH" rel="active" style="font-size: 0.5973333333333334rem;">{{d.title}}</span>
					</div>
				</div>
				<keep-alive>   
        			<component v-bind:is="currentList"></component>  
      			</keep-alive> 
			</div>
		</div>
		<div class="sc-gojNiO daGdYA" rel="hide">
			<div class="sc-daURTG gkxlGr">
				<div class="sc-bXGyLb iDJZVp">晚了一步，看看量身推荐的其他商品吧~</div>
				<span class="iconfont icon-liebiaojiantou sc-lkqHmb hXRdk"></span>
			</div>
			<div class="sc-eLExRp gacXJU"></div>
		</div>
		<div class="sc-eilVRo biqBpV">
			<div @click="toHomePage" class="Home sc-bHwgHz gsNOod sc-TFwJa AQZKI">
				<img class="sc-dTdPqK hZzUdy" src="https://web.juanpi.com/static/media/home_dark.41f2a808.png">
				<span class="sc-itybZL jFebcI"> 首页</span>
			</div>
			<div @click="toSignInPage" class="PopShoppingCart sc-laTMn jIGqoB sc-bnXvFD iVwfSH">
				<img class="sc-fhYwyz gLOWyV" src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png">
				<span class="sc-jzgbtB ktUUzU">购物车</span>
			</div>
			<div class="sc-eerKOB aLTFY">
				<div class="OneBtn sc-gJWqzi eBSgt" @click="go()" data-disabled="false" data-newvip="0">
					<div class="sc-bMvGRv jYITyy">立即购买</div>
				</div>
				<div class="TwoBtn sc-CtfFt eSPJkQ">
					<div @click="showTypeBox" class="sc-bMvGRv jYITyy">加入购物车</div>
				</div>
			</div>
		</div>
		<div class="sc-fnwBNb ihwITF" data-grey="true">
			<div @click="showTransition" class="sc-iNhVCk isniox" data-grey="true">
				<span class="iconfont icon-gengduo" style="font-size: 1.28rem;"></span>
			</div>
			<div class="sc-eAKXzc jkoKSF" data-grey="true" v-show="isShowTransition">
				<div class="sc-bfYoXt lefQZx"></div>
				<ul>
					<li class="sc-gbOuXE bCWRQf">
						<a href="#/home" style="color: rgb(255, 255, 255); font-size: 0.597333rem;">
							<span class="iconfont icon-zhuye" style="font-size: 1.024rem; vertical-align: middle; margin-right: 0.213333rem;"></span>
							<span style="vertical-align: middle;">首页</span>
						</a>
					</li>
					<li class="sc-gbOuXE bCWRQf">
						<a href="" style="color: rgb(255, 255, 255); font-size: 0.597333rem;">
							<span class="iconfont icon-shoucang" style="font-size: 1.024rem; vertical-align: middle; margin-right: 0.213333rem;"></span><span
							 style="vertical-align: middle;">我的收藏</span>
						</a>
					</li>
					<li class="sc-gbOuXE bCWRQf" style="border-bottom: none;">
						<a href="" style="color: rgb(255, 255, 255); font-size: 0.597333rem;">
							<span class="iconfont icon-dingdan" style="font-size: 1.024rem; vertical-align: middle; margin-right: 0.213333rem;"></span><span
							 style="vertical-align: middle;">我的订单</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="sc-cqCuEk cyOSJK" :data-status="isShowTypeBox" v-show="isShowTypeBox">
			<div class="sc-dliRfk duugzz">
				<div>
					<div class="sc-iGrrsa jYjmxa">
						<div class="sc-bmyXtO kdcqpr">
							<img class="sc-iqzUVk gGteGu" src="https://goods1.juancdn.com/goods/180928/1/8/5bad830e33b08908b1054f07_800x800.jpg?iopcmd=thumbnail&amp;type=11&amp;height=200&amp;width=200%7Ciopcmd=convert&amp;Q=80&amp;dst=jpg">
						</div>
						<div class="sc-dEoRIm kLnIRP">
							<div class="Cprice sc-jtggT jHnhrY">¥1499</div>
							<div class="sc-ebFjAB bECJpj">请选择 颜色 尺码</div>
						</div>
						<div class="CloesdSku sc-jKVCRD jCKkwU">
							<div  @click="showTypeBox"><img class="sc-ipZHIp iXbonv" src="https://web.juanpi.com/static/media/del.bbe4aea1.png"></div>
						</div>
					</div>
					<div class="sc-kaNhvL eePJwY">
						<span class="sc-LKuAh djINZm">颜色</span>
						<div class="ColorSku sc-iBEsjs dRKsrh">
							<div @click="selectColor(index)" class="SpanItem sc-hzNEM kpMuTa" rel="" v-for="(g,index) in goodsColors" :class="{
								jdJYnU:goodsColor===index
							}">{{g.title}}</div>
						</div>
						<span class="sc-LKuAh djINZm">尺码</span>
						<div class="SizeSku sc-gmeYpB iGRxGB">
							<div @click="selectSize(index)" class="SpanLess sc-kxynE duIq" rel="" v-for="(g,index) in goodsSizes" :class="{
								cGJTxX:goodsSize===index
							}">
								<div class="sc-fcdeBU gbqzdv" rel="" :class="{
								dkcyW:goodsSize===index
							}">{{g.title}}</div>
								<div class="sc-cooIXK jADZEb" rel="" :class="{
								fhwkhX:goodsSize===index
							}">{{g.stock}}</div>
							</div>
						</div>
						<div class="sc-kZmsYB hzewHz"><span class="sc-RcBXQ gJDKLw">购买数量 </span>
							<div class="sc-fZwumE fecqhx">
								<span @click="subtract()" :class="{'dcPVBu':style1}" class="OperationIconred sc-fQejPQ dGBIdN" rel="notactive">-</span>
								<span class="Numbers sc-clNaTc iMLzwQ">{{count}}</span>
								<span @click="add()" :class="{'dcPVBu':style2}" class="OperationIconadd sc-fQejPQ dGBIdN" rel="active">+</span>
							</div>
						</div>
					</div>
					<div  @click="showTypeBox" class="AddCart sc-etwtAo ixMtuT" rel="">确定</div>
				</div>
			</div>
		</div>
		<div class="sc-cqCuEk cyOSJK" data-status="false">
			<div class="sc-dliRfk duugzz">
				<div class="sc-kasBVs nkEyU">
					<div class="sc-hgHYgh hCCWUb">
						<span class="sc-eInJlc jnjVMj">促销</span>
						<img class="sc-gtfDJT hBNmL" src="/static/media/del.bbe4aea1.png">
					</div>
					<div class="sc-fOICqy gxLiNr"></div>
				</div>
			</div>
		</div>
		<div class="sc-cqCuEk cyOSJK" :data-status="isShowServeBox" v-show="isShowServeBox">
			<div class="sc-dliRfk duugzz">
				<div>
					<div class="sc-hcmgZB ewuaam">服务说明<img @click="showServeBox" src="https://web.juanpi.com/static/media/del.bbe4aea1.png" class="sc-dHmInP bOkQQC"></div>
					<div class="sc-ejGVNB kbZeAr">
						<div class="sc-eLdqWK hCHCDy">
							<div class="sc-kcbnda hjgWbl">
								<i class="sc-fEUNkw fISOzU"></i>
								<span class="sc-dREXXX kbHjvx">24小时发货</span>
							</div>
							<div class="sc-iiUIRa eflMlA">买家付款成功后，商家将在24小时内完成发货。（节假日等特殊情况除外）</div>
							<img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" class="sc-hgRTRy ecxpaX">
						</div>
						<div class="sc-eLdqWK hCHCDy">
							<div class="sc-kcbnda hjgWbl">
								<i class="sc-fEUNkw fISOzU"></i>
								<span class="sc-dREXXX kbHjvx">7天包退</span>
							</div>
							<div class="sc-iiUIRa eflMlA">卷皮严格按照消费者保障服务，接受买家7天无理由退货。</div>
							<img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" class="sc-hgRTRy ecxpaX">
						</div>
						<div class="sc-eLdqWK hCHCDy">
							<div class="sc-kcbnda hjgWbl">
								<i class="sc-fEUNkw fISOzU"></i>
								<span class="sc-dREXXX kbHjvx">售后补贴</span>
							</div>
							<div class="sc-iiUIRa eflMlA">商品存在问题时，请及时申请售后，卷皮将提供价值10元的退货运费补贴。如遇少件、错发、空包裹等情况，还额外提供至少10元的补偿（详见“客服中心”相关规则说明）。</div>
							<img src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" class="sc-hgRTRy ecxpaX">
						</div>
					</div>
					<div class="sc-iIHSe khxcBx" @click="showServeBox">知道了</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import XdetailSelect1 from "./XdetailSelect1.vue";
	import XdetailSelect2 from "./XdetailSelect2.vue";
	import XdetailSelect3 from "./XdetailSelect3.vue";
	export default{
		components:{
			detailSelect1:XdetailSelect1,
			detailSelect2:XdetailSelect2,
			detailSelect3:XdetailSelect3
		},
		data(){
			return{
				detailLists:[{
					title:"图文详情",
					listType:"detailSelect1"
				},
				{
					title:"商品参数",
					listType:"detailSelect2"
				},
				{
					title:"咨询与售后",
					listType:"detailSelect3"
				}],
				detailList:0,
				currentList:"detailSelect1",
				isShowTransition:false,
				isShowTypeBox:false,
				isShowServeBox:false,
				goodsColors:[{
					title:"粉色"
				},
				{
					title:"蓝色"
				}
				],
				goodsColor:0,
				goodsSizes:[{
					title:"L",
					stock:"库存紧张"
				},
				{
					title:"XS",
					stock:"库存紧张"
				},
				{
					title:"S",
					stock:"库存紧张"
				},
				{
					title:"M",
					stock:"库存紧张"
				}
				],
				goodsSize:0,
				count:1,
				style1:false,
				style2:true
			}
		},
		methods:{
			toHomePage(){
				this.$router.push({name:'home'});
			},
			toSignInPage(){
				this.$router.push({name:'signin'});
			},
			go(){
				this.$router.history.push('car');
			},
			selectDetailList(detailList){
				this.detailList = detailList;
				this.currentList = this.detailLists[detailList].listType;
			},
			showTransition(){
				this.isShowTransition = !this.isShowTransition;
			},
			showTypeBox(){
				this.isShowTypeBox = !this.isShowTypeBox;
			},
			showServeBox(){
				this.isShowServeBox = !this.isShowServeBox;
			},
			selectColor(goodsColor){
				this.goodsColor = goodsColor;
			},
			selectSize(goodsSize){
				this.goodsSize = goodsSize;
			},
			add(count){
				this.count++
				if(this.count>1){
					this.style1=true;
				}else if(this.count<=2){
					this.count=1;
				}
			},
			subtract(count){
				this.count--;
				if(this.count<=1){
					this.count=1;
					this.style1=false;
				}
			}
		}
	}
</script>
<style>
 	@import url("../assets/dagdya.css");
 	@import url("../assets/cyosjk.css");
 	@import url("../assets/fnyovs.css");
 	@import url("../assets/ghydbv.css");
 	@import url("../assets/fdvauu.css");


	.hoFmJx {
    margin-top: 0.4266666666666667rem;
    background: #ffffff;
}
	.sc-jnlKLf .sc-fYxtnH.hkCpbl:first-of-type{
		border-radius: 0.170667rem 0px 0px 0.170667rem;
		border-right:none;
	}
	.sc-jnlKLf .sc-fYxtnH.hkCpbl:last-of-type{
		border-radius: 0px 0.170667rem 0.170667rem 0px;
		border-left:none;
	}
	.jdJYnU {
    width: 4.48rem;
    height: 1.3653333333333333rem;
    line-height: 1.3653333333333333rem;
    text-align: center;
    font-size: 0.5973333333333334rem;
    margin-top: 0.256rem;
    margin-bottom: 0.256rem;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: #ff464e;
    color: #fff;
    border:1px solid #ff464e;
}
.sc-kaNhvL .sc-hzNEM,.sc-gmeYpB .sc-kxynE{
	margin-right:0.500rem;
}
.cGJTxX {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 4.48rem;
    height: 1.3653333333333333rem;
    margin-top: 0.256rem;
    margin-bottom: 0.256rem;
    background: #ff464e;
    border:1px solid #ff464e;
}
.dkcyW {
    font-weight: 300;
    font-size: 0.512rem;
    color: #fff;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.fhwkhX {
    font-size: 0.3413333333333333rem;
    height: 0.5973333333333334rem;
    line-height: 0.5973333333333334rem;
    color: #fff;
    font-weight: 300;
    text-align: center;
}

</style>