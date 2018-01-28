import Vue from 'vue'
import Vuex from 'vuex'
import DB from './db'
import devices from './modules/devices'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  modules: {
    devices: devices
  },
  actions: {
    fetchAll(context){
      context.dispatch('devices/fetchAll');
    }
  }
});
