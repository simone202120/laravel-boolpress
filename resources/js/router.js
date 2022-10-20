import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutUs from './pages/AboutUs.vue';
import ContactPage from './pages/ContactPage.vue';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import Blog from './pages/Blog.vue';



const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: HomePage

        },
        {
            path:'/contact',
            name:'contact',
            component: ContactPage

        },
        {
            path:'/AboutUs',
            name:'AboutUs',
            component: AboutUs

        },
        {
            path:'/*',
            name:'NotFound',
            component: NotFound

        },
        {
            path:'/blog',
            name:'blog',
            component: Blog

        },
    ]
})

export default router;