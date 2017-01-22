import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import Home from "./pages/Home";
import Me from "./pages/Me";
import Info from "./pages/Info";
import Order from "./pages/Order";
import "./utils/iconfont";
Vue.use(Router);
const router = new Router({
	mode : "history",
	routes :[
		{
			path : "/",
			redirect: "/home"/*重定向指向home*/
		},
		{
			path : "/home",
			component : Home
		},
		{
			path : "/me",
			component : Me
		},
		{
			path : "/info",
			component : Info
		},
		{
			path : "/order",
			component : Order
		}
	]
});
var app = new Vue({
  el: '#app',
  router,
  render : h => h(App)
})
