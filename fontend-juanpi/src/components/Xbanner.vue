<template>
	<mt-swipe :auto="4000">
		<mt-swipe-item v-for="i in imgs"><img class="sc-kAzzGY dChoOW" :src="i.src"></mt-swipe-item>
	</mt-swipe>
</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		data(){
			return{
				imgs:[{
					num:0,
					src:"https://goods5.juancdn.com/jas/181031/9/6/5bd96f1433b08920633705d8_1080x418.jpg"
				},{
					num:1,
					src:"https://goods3.juancdn.com/jas/181105/4/8/5bdf9f13b6f8ea320e20b995_1080x418.png"
				},{
					num:2,
					src:"https://goods1.juancdn.com/jas/181101/0/8/5bdabfb633b0892baa3b1144_1080x418.jpg"
				},{
					num:3,
					src:"https://goods4.juancdn.com/jas/181102/6/7/5bdbfffb33b0891912321972_1080x418.jpg"
				},{
					num:4,
					src:"https://goods3.juancdn.com/jas/181101/4/6/5bdac62b33b0893c61763f7e_1080x418.jpg"
				},{
					num:5,
					src:"https://goods1.juancdn.com/jas/181026/0/4/5bd2d579b6f8ea62c319eb5a_1080x418.png"
				}
				]
			}
		},
		components:{
			Swipe,
			SwipeItem
		}
	}
</script>