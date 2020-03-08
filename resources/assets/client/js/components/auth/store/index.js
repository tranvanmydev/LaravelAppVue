import ConfigAxios from '*/library/ConfigAxios';
import AuthService from '../api/index';

const AUTH_SET_USER = 'AUTH_SET_USER';
const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';

const state = {
    user: null,
    token: null,
    error: '',
    loading: false,
};

const mutations = {
    [AUTH_SET_TOKEN](state, token) {
        state.token = token;
    },

    [AUTH_SET_USER](state, user) {
        state.user = user;
    },
};

const actions = {
    async actionLogin({
        commit
    }, params) {
        let loginResponse = await AuthService.login(params.params);
        if (loginResponse.status == 200) {
            let token = loginResponse.data;
            ConfigAxios.setAuthorizationHeader(token.token_type, token.access_token);
            commit(AUTH_SET_TOKEN, token);
            // let response = await AuthService.getProfile();
            // console.log(response);

            // commit(AUTH_SET_USER, response.data);
        }

        let errorResponse = loginResponse.response;

        return errorResponse;
    },

    async actionLogout({
        commit
    }) {
        let response = await AuthService.logout();
        if (response.status == 200) {
            commit(AUTH_SET_TOKEN, null);
            commit(AUTH_SET_USER, null);
        }

        return false;
    }
};

const storeAuth = {
    state,
    actions,
    mutations,
};

export default storeAuth;
