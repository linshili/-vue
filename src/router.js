// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引用page页面
import page1 from './components/Page1'
/* import page2 from './components/Page2'
import user from './components/User' */
import phone from './components/Phone'
import computer from './components/Computer'
// 第三方库需要use一下才能用
Vue.use(VueRouter)

// 定义routes路由的集合，数组类型

/* const routes = [
  // 单个路由均为对象类型，path代表的是路径 component代表组件
  {path: '/page1', component: page1},
  {path: '/page2', component: page2},
  {path: '', redirect: 'page1'},
  {path: '', component: page1},
  // 使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
  {path: '/user/:name', component: user}
] */
const routes = [
  {
    path: '/page1',
    component: page1,
    children: [
      {
        path: 'phone',
        component: phone
      },
      {
        path: 'computer',
        component: computer
      }

    ]
  }
]

// 实例化VueRouter并将routes添加进去
const router = new VueRouter({
  // ES6简写 ，等于routes: routes
  routes
})

export default router
