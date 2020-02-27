import HomePage from '*/components/Home.vue';
import AboutPage from '*/components/About.vue';
import LoginPage from '*/components/Login.vue';

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
