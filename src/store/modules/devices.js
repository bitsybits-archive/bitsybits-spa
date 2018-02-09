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
    addNew(context, new_device) {
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
    },
    updateDevice(context, details) {
      if (details.id === details.hash) {
        DB.devices.update(details.id,{ name: details.name }).then(function(){
          context.dispatch('fetchAll');
        });
      } else {
        context.dispatch('removeDevice', details.id).then(function(){
          context.dispatch('addNew', { name: details.name, hash: details.hash }).then(function(){
            context.dispatch('fetchAll'); 
          })
        })
      }
    }
  },
  getters: {}
}

export default devices;