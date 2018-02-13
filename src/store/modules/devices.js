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
        hash: new_device.hash,
        active: true
      }).then(function(device_id){
        context.dispatch('fetchAll');
      }).catch(function(error) {
        console.log("failed adding" + error);
      })
    },
    activateDevice(context, device_id) {
      DB.devices.update(device_id,{ active: true }).then(function(){
        context.dispatch('fetchAll');
      });
    },
    removeDevice(context, device_id) {
      DB.transactions.where('hash').equals(device_id).count(function(count){
        if (count == 0) {
          DB.devices.delete(device_id).then(function(){
            context.dispatch('fetchAll');
          });
        } else {
          DB.devices.update(device_id,{ active: false }).then(function(){
            context.dispatch('fetchAll');
          });
        };
      });
      
    },
    updateDevice(context, details) {
      DB.devices.update(details.hash,{ name: details.name }).then(function(){
        context.dispatch('fetchAll');
      });
    }
  }
}

export default devices;