import DB from './../db'

const devices = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    addToList(state, device) {
      state.list.push(device);
    },
    loadList(state, devices) {
      state.list = devices;
    },
  },
  actions: {
    fetchAll(context) {
      DB.devices.toArray().then(function(devices){
        context.commit('loadList', devices)
      })
    },
    add_new(context, new_device) {
      DB.devices.add({
        name: new_device.name,
        hash: new_device.hash
      }).then(function(device_id){
        context.dispatch('fetchAll');
      }).catch(function(error) {
        console.log("failed adding" + error);
      })
    },
    removeDevice(context, device_id) {
      DB.devices.delete(device_id).then(function(){
        context.dispatch('fetchAll');
      });
    }
  },
  getters: {}
}

export default devices;