import HomePage from '*/components/home/views/Home.vue';
import AboutPage from '*/components/About.vue';
import LoginPage from '*/components/auth/views/Login.vue';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/login/',
        component: LoginPage,
    },
];
