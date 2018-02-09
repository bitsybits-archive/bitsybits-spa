<template>
  <div class="card">
    <div v-if="!editing" class="card-header">
      <div class="card-title h5">{{ device.name }}</div>
      <div class="card-subtitle text-gray">{{ device.hash }}</div>
    </div>
    <div v-if="editing" class="card-header">
      <div class="form-group">
        <label class="form-label" for="input-name">Name</label>
        <input class="form-input" v-model="name" name="name" type="text" id="input-name" placeholder="Device name">
      </div>
      <div class="form-group">
        <label class="form-label" for="input-hash">Hash</label>
        <input class="form-input" v-model="hash" name="name" type="text" id="hash" placeholder="Hash">
      </div>
    </div>
    <div v-if="!editing" class="card-footer">
        <button class="btn btn-primary" v-on:click="startEditing">Edit</button>
        <button class="btn btn-primary" v-on:click="deleteDevice">Delete</button>
    </div>
    <div v-if="editing" class="card-footer">
        <button class="btn btn-primary" v-on:click="saveEditing">Save</button>
        <button class="btn btn-primary" v-on:click="cancelEditing">Cancel</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['device'],
    data: function(){
      return {
        'editing': false,
        'name': '',
        'hash': '',
      }
    },
    created(){
      this.cleanComponent();
    },
    watch: {
      'device': function(_new, _old) {
        console.log();
        this.cleanComponent();
      }
    },
    methods: {
      cleanComponent(){
        this.editing = false;
        this.name = this.device.name;
        this.hash = this.device.hash;  
      },
      deleteDevice() {
        this.$store.dispatch('devices/removeDevice', this.device.hash)
      },
      startEditing() {
        this.editing = true
      },
      cancelEditing() {
        this.editing = false
        this.name = this.device.name;
        this.hash = this.device.hash;
      },
      saveEditing() {
        this.$store.dispatch(
          'devices/updateDevice',
          {
            id: this.device.hash,
            name: this.name,
            hash: this.hash
          }
        )
      }
    }
  }
</script>
<style>
</style>