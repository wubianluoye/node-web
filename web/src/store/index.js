import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	username: localStorage.username || ''
  },
  mutations: {
  	SET_USER_NAME(state, username) {
  		state.username = username
  	}
  },
  actions: {},
  modules: {}
});
