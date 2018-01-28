<template>
  <div class="content">
    <form class="columns" v-on:submit.prevent="addDevice">
      <div class="form-group col-4">
        <label class="form-label col-3" for="input-name">Name</label>
        <input :class="{ 'col-9': true, 'form-input': true, 'is-error': errors.has('name') }" v-validate="'required'" v-model="name" name="name" type="text" id="input-name" placeholder="Name">
        <p v-show="errors.has('name')" class="form-input-hint">{{ errors.first('name') }}</p>
      </div>
      <div class="form-group col-4">
        <label class="form-label col-3" for="input-hash">Hash</label>
        <input :class="{ 'col-9': true, 'form-input': true, 'is-error': errors.has('hash') }" v-validate="{ required: true, exist: { type: 'devices', key: 'hash' }}" v-model="hash" type="text" name="hash" id="input-hash" placeholder="Name">
        <p v-show="errors.has('hash')" class="form-input-hint">{{ errors.first('hash') }}</p>
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
              <button class="btn btn-primary" v-on:click="deleteDevice(item.hash)">Delete</button>
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
        this.$validator
            .validateAll()
            .then(function(result){
              if (result) {
                self.$store
                    .dispatch('devices/add_new', { name: self.name, hash: self.hash })
                    .then(function(){
                      self.name = '';
                      self.hash = '';
                      self.$validator.reset();
                    });
              }
            })
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