import Vue from "vue";
import Vuex from "vuex";
import notes from "./modules/notes.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    notes
  },
});
