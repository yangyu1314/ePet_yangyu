import Vue from 'vue'
import VueRouter from 'vue-router'

const firstPage =()=>import('../pages/first-page/first-page.vue')
const category =()=> import('../pages/category/category.vue')
const shopcart =()=> import('../pages/shopcart/shopcart.vue')
const mine =()=> import('../pages/mine/mine.vue')


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/first-page'
    },
    {
      path:'/first-page',
      component:firstPage
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/shopcart',
      component:shopcart
    },
    {
      path:'/mine',
      component:mine
    }
  ]
})
