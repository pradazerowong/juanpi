<template>
	<section>
		<div class="sc-cHSUfg gdMLpp" style="position: relative;">
			<mt-swipe :auto="0">
				<mt-swipe-item v-for="(s,index) in sliders">
					<img class="sc-cTjmhe iBFzqT" :src="s.img" />
					<div class="sc-cugefK hxVMiY">{{index+1}}/{{sliders.length}}</div>
				</mt-swipe-item>
			</mt-swipe>
			
		</div>
	</section>
</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		data(){
			return{
				sliders:[{
					img:"https://goods1.juancdn.com/goods/180928/1/8/5bad830e33b08908b1054f07_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"
				},
				{
					img:"https://goods7.juancdn.com/goods/180928/c/1/5bad831033b08910995c7101_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"
				},{
					img:"https://goods2.juancdn.com/goods/180928/3/4/5bad8311b6f8ea37e8119c33_800x800.jpg?imageMogr2/quality/88!/format/jpg"
				},{
					img:"https://goods3.juancdn.com/goods/180928/4/2/5bad8313b6f8ea5a59554eec_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"
				},{
					img:"https://goods7.juancdn.com/goods/180928/c/5/5bad8314b6f8ea702537f083_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"
				},{
					img:"https://goods3.juancdn.com/goods/180928/5/d/5bad830db6f8ea51fe33a31a_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"
				}
				],
				slider:0
			}
		},
		components:{
			Swipe,
			SwipeItem
		},
		methods:{
			
		}
	}
</script>
<style>
	.gdMLpp {
	    position: relative;
	    width: 16rem;
	    height: 16rem;
	}
	.hxVMiY {
	    position: absolute;
	    width: 1.536rem;
	    height: 0.8533333333333334rem;
	    right: 0.768rem;
	    bottom: 0.768rem;
	    border-radius: 0.08533333333333333rem;
	    background-color: rgba(0,0,0,.45);
	    color: #fff;
	    font-size: 0.4266666666666667rem;
	    line-height: 0.8533333333333334rem;
	    text-align: center;
	}
	.iBFzqT {
	    width: 16rem;
	    height: 16rem;
	}
</style>