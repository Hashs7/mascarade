import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import messages from './modules/messages'
import score from './modules/score'
import flash from './modules/flash'
import stories from './modules/stories'
import interact from './modules/interact'
import modalProgress from './modules/modalProgress'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        messages,
        score,
        flash,
        stories,
        interact,
        modalProgress
    },
    //plugins: [createPersistedState({ storage: window.sessionStorage })]
});