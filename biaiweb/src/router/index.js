import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Science = () => import('../views/science/Science.vue')
const ScienceDetails = () => import('../views/science/ScienceDetails.vue')
const About = () => import('../views/about/About.vue')
const GoIn = () => import('../views/goin/GoIn.vue')
const News = () => import('../views/new/News.vue')
const NewsDetails = () => import('../views/new/NewsDetails.vue')
const Product = () => import('../views/product/Product.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/science',
    name: 'Science',
    component: Science,
  },
  {
    path: '/science/sciencedetails/:id',
    name: 'ScienceDetails',
    component: ScienceDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/go-in',
    name: 'GoIn',
    component: GoIn
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/newsdetails/:id',
    name: 'NewsDetails',
    component: NewsDetails
  },
  
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
