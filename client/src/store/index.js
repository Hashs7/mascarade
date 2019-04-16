import Vue from 'vue/types';
import Vuex from 'vuex/types';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
});
