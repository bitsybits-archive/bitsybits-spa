<template>
  <div class="content">
    <form class="columns" v-on:submit.prevent="addDevice">
      <div class="form-group col-4">
        <label class="form-label col-3" for="input-name">Name</label>
        <input v-model="name" class="form-input col-9" type="text" id="input-name" placeholder="Name">
      </div>
      <div class="form-group col-4">
        <label class="form-label col-3" for="input-hash">Hash</label>
        <input v-model="hash" class="form-input col-9" type="text" id="input-hash" placeholder="Name">
      </div>
      <div class="form-group col-4">
        <button type="submit" class="btn btn-primary">Add new</button>
      </div>
    </form>
    <div class="columns">
      <div v-for="item in list" class="column col-3">
        <div class="card">
          <div class="card-header">
            <div class="card-title h5">{{ item.name }}</div>
            <div class="card-subtitle text-gray">{{ item.hash }}</div>
          </div>
          <div class="card-footer">
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-primary" v-on:click="deleteDevice(item.id)">Delete</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        name: '',
        hash: ''
      }
    },
    methods: {
      addDevice() {
        var self = this;

        this.$store
            .dispatch('devices/add_new', { name: this.name, hash: this.hash })
            .then(function(){
              self.name = '',
              self.hash = ''
            });

      },
      deleteDevice(device_id) {
        this.$store.dispatch('devices/removeDevice', device_id)
      }
    },
    computed: {
      list() {
        return this.$store.state.devices.list
      }
    },
  }
</script>
<style>
</style>