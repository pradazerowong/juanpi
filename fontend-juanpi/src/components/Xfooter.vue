<template>
	<div class="sc-cMljjf QllnW">
		<ul class="sc-jAaTju izStSE">
			<router-link v-for="(l,index) in locations" :to="l.path" class="sc-jDwBTQ fSJdS" active-class="act"><i class="sc-gPEVay gtkfWd iconfont" :class="l.classFont"></i>{{l.title}}</router-link>
		</ul>
	</div>
</template>
<script>
	
	export default {
		data(){
			return{
				locations:[{
					title:"首页",
					path:"/home",
					classFont:"icon-shouye_hover"
				},{
					title:"分类",
					path:"/categories",
					classFont:"icon-icon_category"
				},{
					title:"购物车",
					path:"/signIn",
					classFont:"icon-03f"
				},{
					title:"我的卷皮",
					path:"/usercenter",
					classFont:"icon-wode1"
				}
				],
			}
		}
	}
</script>
<style>
@font-face {font-family: "iconfont";
  src: url('../assets/font/iconfont.eot?t=1541490863977'); /* IE9*/
  src: url('../assets/font/iconfont.eot?t=1541490863977#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAW0AAsAAAAACRQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gEhYY21hcAAAAYAAAABoAAABssrUnYZnbHlmAAAB6AAAAbgAAAKo9j8rQWhlYWQAAAOgAAAALwAAADYTLhcvaGhlYQAAA9AAAAAcAAAAJAfeA4ZobXR4AAAD7AAAAA4AAAAUFAAAAGxvY2EAAAP8AAAADAAAAAwBcAIebWF4cAAABAgAAAAfAAAAIAETAExuYW1lAAAEKAAAAUUAAAJtPlT+fXBvc3QAAAVwAAAAQwAAAFSFSpsZeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecT1LY27438AQw9zA0AAUZgTJAQDliQxTeJztkMEJgDAMRV9sFCluIHQCh+g0njw5dNaoaePBIfzhleSTEvjADCTncBTkRui63JXhJ/LwlepzZmVismy7FTtbg2//SnwvqvfqP/yGLPzaxlvfSXt6QU/b9mD4JfDssDMgPVp1F7d4nIVSPW8TQRCd2dm7s33YzikXGyV47fVt7kDogjjHZ/GhGIX8AOhdpUmBkKBK5CINiA6JX4AiBf4AJTRu+AU0LlGEaPgBVHdh7oyFlCAo9s17M694ox0ggPMXlNNjuA634S4AhoHewijo236rPUhaXVxVONBJuh1Guh8Oo9HmDo5W05AKR9HWS0I/mu1spfow3qvV67W9zk2p78numtgvZPZWOFee4/erhsZYebduzNCY7OeiirkX38G6X8dIzfL9liqobT2qGVRtPFhR2bZJgyA1CwQAybm/0gn1oAlduAVjTs6xdQMdT2Fbc8aL2vvPnE7QbJzDhkGuWNT8wcXOJT271On9zfZHi9m/54vdAOiYBAhowDrc4N0ihzgqJ+WgWyVhyQvsIDawH0bhkAfc9YWR1rXTuZTz0xLfJ7uIu0mJWIufHj6JpZhOJlPCl1WJR0sf44eljzF3tQl6/hr7aDrxobiTL/SGYqhAC/gHquhpb8DPcuygH6ZjTPla7NFvqtBuoi0gf4bqG6rsdSItpyKsREoupqCfSmp9lBTnZ9ln7ORn4r4XkOvKAjquS68IS4RfoDVvTXicY2BkYGAAYrGDKtfi+W2+MnCzMIDADfbM9Qj6fzMLA3MgkMvBwAQSBQAPmwlUAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAABcAMoBFAFUeJxjYGRgYGBlcGBgYQABJiDmAkIGhv9gPgMAD20BYAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYHZwDiNNzM5Py8+ObEkNT2/qJK1PD8l1ZCnOCO/tDI1PiO/LLWIgQEADf0NewA=') format('woff'),
  url('../assets/font/iconfont.ttf?t=1541490863977') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../assets/font/iconfont.svg?t=1541490863977#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:18px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-03f:before { content: "\e60a"; }

.icon-icon_category:before { content: "\e61e"; }

.icon-wode1:before { content: "\e666"; font-size:24px;}

.icon-shouye_hover:before { content: "\e61b"; }
</style>