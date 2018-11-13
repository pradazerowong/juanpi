import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



import Mint from 'mint-ui';
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(Mint);


// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 一级路由
import Home from "./containers/Home.vue";
import Categories from "./containers/Categories.vue";
import Detail from "./containers/Detail.vue";
import SignIn from "./containers/SignIn.vue";
import SignUp from "./containers/SignUp.vue";
import SignUpPwd from "./containers/SignUpPwd.vue";
import UserCenter from "./containers/UserCenter.vue";
import Keywords from "./containers/Keywords.vue";
import List from "./containers/List.vue";
import Car from "./containers/Car.vue";
import Pay from "./containers/Pay.vue";
import Order from "./containers/Order.vue";
import Store from "./containers/Store.vue";

// 二级路由
import CategoriesChannel from "./containers/CategoriesChannel.vue";
import ListChannel from "./containers/ListChannel.vue";


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。



const routes = [
  {
    path: '/home',
    component: Home,
    name:'home',
  },
  {
    path: '/categories',
    component:Categories ,
    name:'categories' ,
    children: [
      {
        path: 'womensClothing',
        component: CategoriesChannel,
        name:'womensClothing'
      },
      {
        path: 'mensClothing',
        component: CategoriesChannel,
        name:'mensClothing'
      },
      {
        path: 'maternalAndInfant',
        component: CategoriesChannel,
        name:'maternalAndInfant'
      },
      {
        path: 'shoe',
        component: CategoriesChannel,
        name:'shoe'
      },
      {
        path: 'luggage',
        component: CategoriesChannel,
        name:'luggage'
      },
      {
        path: 'commodity',
        component: CategoriesChannel,
        name:'commodity'
      },
      {
        path: 'household',
        component: CategoriesChannel,
        name:'household'
      },
      {
        path: 'underclothesAndAccessory',
        component: CategoriesChannel,
        name:'underclothesAndAccessory'
      },
      {
        path: 'beautyMakeUp',
        component: CategoriesChannel,
        name:'beautyMakeUp'
      },
      {
        path: 'sportsAndOutDoor',
        component: CategoriesChannel,
        name:'sportsAndOutDoor'
      },
      {
        path: 'goodies',
        component: CategoriesChannel,
        name:'goodies'
      },
      {
        path: 'carEntertainment',
        component: CategoriesChannel,
        name:'carEntertainment'
      },
      {
        path: '/categories',
        redirect: '/categories/womensClothing'
      } //  碰到#/重定向到#/home
    ]
  },
  { path: '/detail', component:Detail , name:'detail' },
  { path: '/signin', component:SignIn , name:'signin' },
  { path: '/signup', component:SignUp , name:'signup' },
  { path: '/signuppwd', component:SignUpPwd , name:'signuppwd' },
  { path: '/userCenter', component:UserCenter , name:'userCenter' },
  { path: '/keywords', component:Keywords , name:'keywords' },
  { 
    path: '/list', 
    component:List , 
    name:'list',
    children: [
      {
        path: 'all',
        component: ListChannel,
        name:'all'
      },
      {

        path: 'price',
        component: ListChannel,
        name:'price'
      },
      {
        path: 'sales',
        component: ListChannel,
        name:'sales'
      },
      {
        path: 'starttime',
        component: ListChannel,
        name:'starttime'
      },
      {
        path: 'screen',
        component: ListChannel,
        name:'screen'
      },
      {
        path: '/list',
        redirect: '/list/all'
      } //  碰到#/重定向到#/home
    ]
   },
  { path: '/car', component:Car , name:'car' },
  { path: '/pay', component:Pay , name:'pay' },
  { path: '/order', component:Order , name:'order' },
  { path: '/store', component:Store , name:'store' },
  {
    path: '/',
    redirect: '/home'
  } //  碰到#/重定向到#/home
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

// 终极容器
new Vue({
  router, //注入路由功能
  render: h => h(App)
}).$mount('#app')