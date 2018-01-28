import DB from './../db'

const devices = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    addToList(state, device) {
      state.list.push(device)
    },
    cleanList(state) {
      state.list = [];
    }
  },
  actions: {
    fetchAll(context) {
      context.commit('cleanList');
      DB.devices.each(function(device){
        context.commit('addToList', { id: device.id, name: device.name, hash: device.hash  })
      })
    },
    add_new(context, new_device) {
      DB.devices.add({
        name: new_device.name,
        hash: new_device.hash
      }).then(function(device_id){
        DB.devices.get(device_id).then(function(device){
          context.commit('addToList', { id: device.id, name: device.name, hash: device.hash  });
        });
      }).catch(function() {
        console.log("failed adding");
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