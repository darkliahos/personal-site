/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BIcon, BIconLinkedin, BIconArrowDown } from 'bootstrap-vue'

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon)
Vue.component('BIconLinkedin', BIconLinkedin)
Vue.component('BIconArrowDown', BIconArrowDown)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
