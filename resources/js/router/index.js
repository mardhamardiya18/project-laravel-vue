import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        component: Blog
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
