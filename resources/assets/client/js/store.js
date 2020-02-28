import Vue from 'vue';
import Vuex from 'vuex';
import * as Cookies from 'js-cookie';
import config from '*/config';
import storeHome from '*/components/home/store';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//         storeHome,
//     },
//     plugins: [createPersistedState({
//         paths: [
//             'storeHome.navActive',
//         ],
//         getState: (key) => Cookies.getJSON(key),
//         setState: (key, state) => Cookies.set(key, state, {
//             expires: config.cookie.lifespan,
//             secure: config.cookie.secure,
//         }),
//     })],
// });

export default new Vuex.Store({
    strict: true,
    modules: {
        storeHome,
    },
    plugins: [createPersistedState(
        {
            paths: [
                'storeHome.navActive',
            ],
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) => Cookies.set(key, value, {
                    expires: 3,
                    secure: false
                }),
                removeItem: key => Cookies.remove(key)
            },

        }
    )],
});
