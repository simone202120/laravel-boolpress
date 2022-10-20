import Vue from 'Vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutUs from './pages/AboutUs.vue';
import ContactPage from './pages/ContactPage.vue';
import HomePage from './pages/HomePage.vue';

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
    ]
})

export default router;