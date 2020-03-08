<template>
<f7-app :params="f7params">
    <f7-view main url="/"></f7-view>
</f7-app>
</template>

<script>
import HomePage from '*/components/home/views/Home.vue';
import AboutPage from '*/components/About.vue';
import LoginPage from '*/components/auth/views/Login.vue';

export default {
    name: 'App',
    data() {
        return {
            // app params
            f7params: {
                name: 'My App',
                id: 'com.myapp.test',
                // specify routes for app
                routes: [{
                    path: '/',
                    component: LoginPage,
                },
                {
                    path: '/about/',
                    component: AboutPage,
                },
                {
                    path: '/home/',
                    component: HomePage,
                },
                ],
            }
        };
    },
};
</script>
