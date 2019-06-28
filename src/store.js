/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: null,
    usersList: [],
  },
  mutations: {
    setActiveUser(state, data) {
      state.activeUser = data;
    },
    setUsersList(state, data) {
      state.usersList = data;
    },
    addNewUser(state, data) {
      state.usersList.push(data);
    },
  },
  actions: {
    setActiveUser({ commit }, user) {
      commit('setActiveUser', user);
    },
    setUsersList({ commit }, list) {
      commit('setUsersList', list);
    },
    addNewUser({ commit }, user) {
      commit('addNewUser', user);
    },
  },
});
