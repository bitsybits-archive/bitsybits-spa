import Vue from 'vue'
import Vuex from 'vuex'
import DB from './db'
import devices from './modules/devices'
import transactions from './modules/transactions'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  modules: {
    devices: devices,
    transactions : transactions
  },
  actions: {
    fetchAll(context){
      context.dispatch('devices/fetchAll');
    }
  }
});
