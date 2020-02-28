<template>
<f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Login</f7-login-screen-title>
    <f7-list form>
        <f7-list-input label="Email" type="email" placeholder="Your email" :value="credentials.email"></f7-list-input>
        <f7-list-input label="Password" type="password" placeholder="Your password" :value="credentials.password"></f7-list-input>
    </f7-list>
    <f7-list>
        <f7-list-button @click="signIn">Sign In</f7-list-button>
        <f7-block-footer>Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</f7-block-footer>
    </f7-list>
</f7-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            credentials: {
                email: 'tranvanmydev@gmail.com',
                password: '123456',
            }

        };
    },
    computed: {
        ...mapState({
            token: state => state.storeAuth.token,
        }),
    },
    methods: {
        async signIn() {
            await this.$store.dispatch('actionLogin', {
                vue: this,
                params: this.credentials
            });

            if (this.token && this.token.access_token) {
                const self = this;
                const router = self.$f7router;
                return router.navigate(router.routes[2]['path']);
            }
        },
    },
};
</script>
