<template>
	<div id="wraper">
		<div  v-if="channel===0" class="third-cate" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<div  v-for="(n,index) in list1" :key="(n,index)" class="cate-second" style="width: 72.64px;">
				<a @click="sendParams(index) " :cid="n.cid" class="bc" :data-bc="n.data_bc" style="background: none;">
					<img v-bind:src="`${n.src}?iopcmd=convert&amp;dst=webp`" class="cate-img lazy loaded">
					<span>{{n.name}}</span>
				</a>
				<div class="icon-hot icon" v-show="n.hot">HOT</div>
			</div>
			
			<div class="cate-bottom" ></div>
		</div>

		<div v-if="channel===1" class="third-cate" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<div v-for="(n,index) in list2" :key="(n,index)" class="cate-second" style="width: 72.64px;">
				<a @click="sendParamss(index)" :cid="n.cid" class="bc" :data-bc="n.data_bc" style="background: none;">
					<img v-bind:src="`${n.src}?iopcmd=convert&amp;dst=webp`" class="cate-img lazy loaded">
					<span>{{n.name}}</span>
				</a>
				<div class="icon-hot icon" v-show="n.hot">HOT</div>
				
			</div>
			
			<div class="cate-bottom"></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list1:[{
					cid:251,
					data_bc:"1_243_1_251",
					src:"//s2.juancdn.com/bao/180905/4/b/5b8f380933b0894a8148cadf_200x200.png",
					name:"针织衫",
					hot:true
				},{
					cid:1280,
					data_bc:"1_243_2_1280",
					src:"//s2.juancdn.com/bao/180905/4/8/5b8f347a33b0897f4215af30_200x200.png",
					name:"衬衫",
					hot:true
				},{
					cid:2108,
					data_bc:"1_243_3_2108",
					src:"//s2.juancdn.com/bao/170824/5/2/599ea1398150a11ea3793d3b_200x200.png",
					name:"秋季风衣",
					hot:false
				},{
					cid:2109,
					data_bc:"1_243_4_2109",
					src:"//s2.juancdn.com/bao/170824/1/0/599ea1b1a9fcf8812316c5e0_200x200.png",
					name:"女士外套",
					hot:false
				},{
					cid:1281,
					data_bc:"1_243_5_1281",
					src:"//s2.juancdn.com/bao/170824/3/b/599ea2db8150a12a9254bab8_200x200.png",
					name:"卫衣",
					hot:false
				},{
					cid:1278,
					data_bc:"1_243_6_1278",
					src:"//s2.juancdn.com/bao/180905/9/8/5b8f35ca33b0894e21728c45_200x200.png",
					name:"女士裙装",
					hot:false
				},{
					cid:256,
					data_bc:"1_243_7_256",
					src:"//s2.juancdn.com/bao/180905/f/1/5b8f3bf4b6f8ea15961c8a60_200x200.png",
					name:"懒人套装",
					hot:false
				},{
					cid:1279,
					data_bc:"1_243_8_1279",
					src:"//s2.juancdn.com/bao/180905/b/d/5b8f31f9b6f8ea165302bd3d_200x200.png",
					name:"羽绒棉服",
					hot:true
				},{
					cid:3314,
					data_bc:"1_243_9_3314",
					src:"//s2.juancdn.com/bao/180517/4/1/5afd28a4b6f8ea0ef666b06f_200x200.png",
					name:"中老年女装",
					hot:false
				},{
					cid:262,
					data_bc:"1_243_10_262",
					src:"//s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png",
					name:"牛仔裤",
					hot:true
				},{
					cid:1606,
					data_bc:"1_243_11_1606",
					src:"//s2.juancdn.com/bao/180522/a/7/5b03e64433b0891bb21a89ba_200x200.png",
					name:"职业套装",
					hot:false
				},{
					cid:1283,
					data_bc:"1_243_12_1283",
					src:"//s2.juancdn.com/bao/170824/5/5/599ea25fa9fcf8809c07e048_200x200.png",
					name:"轻薄西装",
					hot:true
				},{
					cid:261,
					data_bc:"1_243_13_261",
					src:"//s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png",
					name:"休闲裤",
					hot:false
				},{
					cid:1284,
					data_bc:"1_243_14_1284",
					src:"//s2.juancdn.com/bao/170824/e/3/599ea2b98150a12b9821a3eb_200x200.png",
					name:"夹克",
					hot:true
				},{
					cid:263,
					data_bc:"1_243_15_263",
					src:"//s2.juancdn.com/bao/170824/b/0/599ea3ef8150a12acd62ad87_200x200.png",
					name:"连体/背带裤",
					hot:false
				}],
			list2:[{
					cid:274,
					data_bc:"2_244_1_274",
					src:"//s2.juancdn.com/bao/170828/a/3/59a3d022a9fcf829a36cf67d_200x200.png",
					name:"秋上新",
					hot:false
				},
				{
					cid:1782,
					data_bc:"1_244_2_1782",
					src:"//s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png",
					name:"夹克",
					hot:true
				},
				{
					cid:2242,
					data_bc:"1_244_3_2242",
					src:"//s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png",
					name:"卫衣",
					hot:false
				},
				{
					cid:272,
					data_bc:"1_244_4_272",
					src:"//s2.juancdn.com/bao/170828/8/d/59a3d0868150a167580ef351_200x200.png",
					name:"T恤",
					hot:true
				},
				{
					cid:1285,
					data_bc:"1_244_5_1285",
					src:"//s2.juancdn.com/bao/170918/2/4/59bfc077a9fcf869cc021996_200x200.png",
					name:"背心/马甲",
					hot:false
				},
				{
					cid:279,
					data_bc:"1_244_6_279",
					src:"//s2.juancdn.com/bao/180118/d/c/5a6069928150a13ce7789245_200x200.png",
					name:"套装",
					hot:false
				},
				{
					cid:277,
					data_bc:"1_244_7_277",
					src:"//s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png",
					name:"牛仔裤",
					hot:false
				},
				{
					cid:278,
					data_bc:"1_244_8_278",
					src:"//s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png",
					name:"休闲裤",
					hot:false
				},
				{
					cid:276,
					data_bc:"1_244_9_276",
					src:"//s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png",
					name:"西裤",
					hot:true
				},
				{
					cid:280,
					data_bc:"1_244_10_280",
					src:"//s2.juancdn.com/bao/170526/2/3/5927c3c9ad0a496da18b45cd_200x200.png",
					name:"内衣",
					hot:false
				},
				{
					cid:281,
					data_bc:"1_244_11_281",
					src:"//s2.juancdn.com/bao/170526/f/6/5927c3d8a43d1f4ca80c9b57_200x200.png",
					name:"袜子",
					hot:true
				}
			]
			}
		},
		methods:{
			
			sendParams (index){
				let id=this.list1[index].cid
				let name=this.list1[index].name
				
				this.$router.history.push({path: '/list/all', query: {cid:id,name:name}});
			},
			sendParamss (index){
				let id=this.list2[index].cid
				let name=this.list2[index].name
				
				this.$router.history.push({path: '/list/all', query: {cid:id,name:name}});
			}
		},
		props:["channel"]
	};
</script>
