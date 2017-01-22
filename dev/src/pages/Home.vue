<style lang="stylus" scoped>
$orange = #e63700
$lightOrange = #e63700 + 50 
	.index
		div
			width 100%
			.ul1
				border 1px solid #333
				overflow hidden
				a
					float left
					margin .5rem 0
					padding 0 1rem
					height 1.25rem
					font-size .7rem
					border-right 1px solid #666
					&.li_icon
						padding .5rem .75rem
						border-right none
					span
						float left
						width 100%
						text-align center
					svg
						margin auto
						display block
						width .7rem
						height .7rem
						.icon
							color $orange
							
			.ul2
				width 100%
				li
					padding .5625rem .625rem
					box-shadow 0 1px 0 1px #ccc
					margin-bottom .1875rem
					overflow hidden
					a
						float left
						img
							width 6.875rem
							height 4.875rem
						// background url(../assets/main01.png) no-repeat
						// background-size 100% 100%
					.shop
						position relative
						float right
						width 11.2rem
						height 4.875rem
						h2
							padding .375rem 0 .2rem
							font-size .75rem
						p
							padding .1875rem 0
							color #333
							font-size .625rem	
						.shop1
							font-size .5rem	
							padding .1rem .275rem
							border 1px solid $lightOrange
							border-radius .125rem
							color $orange
						.shopbottom
							padding .3125rem 0
							p
								font-size .75rem
								&.left
									float left
								&.right
									float right
								.pay
									color $orange
									font-size .875rem
								em
									color $orange
						i
							position absolute
							top 0
							right .5rem

				
</style>
<template>
    <div class="index">
    	<banner action="/api/get_banner/home" /><!--action组件不同的请求地址-->
    	<search />
    	<!-- <list :data="data"/> -->
    	<div>
    		<div class="ul1">
	    		<ro  uter-link v-for="(item,$index) of settings" :to="item.href">
	    			<span v-if="$index !==4">{{item.name}}</span>
					<svg v-if="$index !==4" class="icon" aria-hidden="true">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
					<div v-else>
						<svg class="icon" aria-hidden="true">
							<use :xlink:href="`#icon-${item.icon}`"></use>
						</svg>
					</div>
				</router-link>
			</div>
    		<ul class="ul2" >
    			<li v-for="item of info">
    				<a href="#"><img :src="`${item.url}`"/></a>
    				<div class="shop">
    					<h2>{{item.head}}</h2>
    					<p>{{item.title}}</p>
    					<span class="shop1">{{item.shop1}}</span>
    					<div class="shopbottom"><p class="left"><em>￥</em><span class="pay">{{item.pay}}</span>元/平米/天起</p><p class="right">佣金：<span>{{item.day}}</span>个月</p></div>
    					<i>❤</i>
    				</div>
    			</li>
    		</ul>
    	</div>
    </div>
</template>
<script>
import Banner from "../components/Banner";
import Search from "../components/Search";
import List from "../components/List"
export default {
	methods:"history",
	components : {
	  	Banner,
	  	Search,
	  	List
	},
  	data () {
    return {
     	settings:[
			{
				name : "区域",
				icon : "moreunfold",
				href : "/home"
			},
			{
				name : "面积",
				icon : "moreunfold",
				href : "/order"
			},
			{
				name : "单价",
				icon : "moreunfold",
				href : "/new"
			},
			{
				name : "更多",
				icon : "moreunfold",
				href : "/info"
			},
			{
				name : "",
				icon : "trade",
				href : "/me"
			}
		],
		info:[
			{
				url:require("../assets/main01.png"),
				href:"/area",
				head:"东方金融中心",
				title:"浦东-八百伴",
				shop1:"商务中心",
				pay:7,
				day:1
			},
			{
				url:require("../assets/1.png"),
				href:"/area",
				head:"华纳金融",
				title:"杭州",
				shop1:"写字楼",
				pay:8,
				day:2
			}
		]
    }
  },
  async beforeCreate(){
  	this.data=(await(await fetch("/api/house/get").json())).data;
  }
}
</script>

