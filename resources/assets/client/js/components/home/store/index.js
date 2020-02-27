const SET_NAVIGATION = 'SET_NAVIGATION';

const state = {
    navActive: 'dashboard',
    listNavigation: 1,
    beforeNavigation: 1,
};

const mutations = {
    [SET_NAVIGATION]( state, { navigation }) {
    },
};

const actions = {
    async actionSetNavigation({ commit }, { vue }) {
        // console.log(12121212);
    }
};

const storeHome = {
    state,
    actions,
    mutations,
};

export default storeHome;
