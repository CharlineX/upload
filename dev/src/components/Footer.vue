<style lang="stylus" scoped>
$orange = #e63700;
$lightOrange = $orange + 50 
	footer
		position fixed
		bottom 0
		background-color #fff
	a
		width 4rem
		height 2.7rem
		border-top 1px solid #e5e5e5
		text-align center
		font-size .64rem
		color #b4b4b4
		float left
		overflow hidden
		.icon
			display block
			margin .32rem auto .16rem
		&.router-link-active
			.icon
				color $orange
			span
				color $lightOrange
		div
			margin .25rem auto
			width 2.375rem
			height 2.0625rem
			background-color $lightOrange
			border-radius 0.1875rem
			.icon
				float left
				margin .3875rem .4625rem
				width 1.4125rem
				height @width
				color #fff
</style>
<template>
	<footer>
		<router-link v-for="(item,$index) of settings" :to="item.href">
			<svg v-if="$index !==2" class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-${item.icon}`"></use>
			</svg>
			<span v-if="$index !==2">{{item.name}}</span>
			<div v-else>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-${item.icon}`"></use>
				</svg>
			</div>
		</router-link>
	</footer>
</template>
<script>
	export default {
		data (){
			return{
				settings:[
					{
						name : "首页",
						icon : "all",
						href : "/home"
					},
					{
						name : "预约",
						icon : "phone",
						href : "/order"
					},
					{
						name : "",
						icon : "add",
						href : "/new"
					},
					{
						name : "信息",
						icon : "comments",
						href : "/info"
					},
					{
						name : "我",
						icon : "account",
						href : "/me"
					}
				]
			};
		}
	};
</script>