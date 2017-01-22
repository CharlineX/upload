<style lang="stylus" scoped>
	$orange = #e63700
	.banner
		position relative
		height 17.0625rem
		overflow hidden
		a
			position absolute
			top 0
			left 0
			width 100%
			height @height
			transform translateX(100%)
			background-size 100% 100%
			&.current
				animation bannerIn 1s linear forwards
			&.previous
				animation bannerOut 1s linear forwards
		div
			position absolute
			left 50%
			bottom .5625rem
			transform translate(-50%,-50%)
			text-align center
			overflow hidden
			z-index 2
			em
				position relative
				float left
				margin 0 2px
				width .625rem
				height .625rem
				border 1px solid #b4b4b4
				border-radius 50%
				&:after
					content ""
					position absolute
					top 50%
					left 50%
					transform translate(-50%,-50%)
					width (@width / 4)
					height @width
					background-color #b4b4b4
				&.current
					border 1px solid $orange
					&:after
						background-color $orange
		@keyframes bannerIn
			from 
				transform translateX(100%)
			to
				transform translateX(0)
		@keyframes bannerOut
			from 
				transform translateX(0)
			to
				transform translateX(-100%)
				
</style>
<template>
	<div class="banner">
		<router-link v-for="(item,$index) of data" :to="item.href" :class="{'current':index===$index,'previous':(index?index-1:lastIndex)===$index}" :style="`background-image:url(${item.url})`" />
		<div>
			<em v-for="(item,$index) of data" :class="{'current':index===$index}"></em>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["action"],
		data(){
			return{
				index : 0,
				data : []/*将从下面拿到*/
			};
		},
		computed : {
			lastIndex(){
				return this.data.length-1;
			},
			bannerData : {
				get(){
					return this.data;
				},
				set(value){
					this.data = value;
					const len = this.data.length;
					setInterval(() => {
						this.index = (this.index + 1) % len;
					},2000);
				}
			}
		},
		async created(){
			this.bannerData = (await (await fetch(this.action)).json()).data;
		}
		//async mounted(){
			//this.data = (await (await fetch("/api/get_banner")).json()).data;/*从服务器获取数据*/
			// const len = this.data.length;
			// setInterval(() => {
			// 	this.index = (this.index + 1) % len;
			// },2000);
		//}
	};
</script>