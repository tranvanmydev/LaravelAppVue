import Vue from 'vue';
import Vuex from 'vuex';
import * as Cookies from 'js-cookie';
import config from '*/config';
import storeHome from '*/components/home/store';
import storeAuth from '*/components/auth/store';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeHome,
        storeAuth,
    },
    plugins: [createPersistedState({
        paths: [
            'storeHome.navActive',
            'storeAuth.token',
            'storeAuth.user'
        ],
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, {
            expires: config.cookie.lifespan,
            secure: config.cookie.secure,
        }),
    })],
});
