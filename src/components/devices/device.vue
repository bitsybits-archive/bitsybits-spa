<template>
  <div class="card">
    <div class="status">{{ device.active ? 'active' : 'inactive' }}</div>
    <div class="card-header">
      <div v-if="!editing" class="card-title h5">{{ device.name }}</div>
      <div v-if="editing" class="form-group">
        <label class="form-label" for="input-name">Name</label>
        <input class="form-input" v-model="name" name="name" type="text" id="input-name" placeholder="Device name">
      </div>
      <div class="card-subtitle text-gray">{{ device.hash }}</div>
    </div>
    <div v-if="!editing && device.active" class="card-footer">
      <button class="btn btn-primary" v-on:click="startEditing">Edit</button>
      <button class="btn btn-primary" v-on:click="deleteDevice">Delete</button>
    </div>
    <div v-if="editing && device.active" class="card-footer">
      <button class="btn btn-primary" v-on:click="saveEditing">Save</button>
      <button class="btn btn-primary" v-on:click="cancelEditing">Cancel</button>
    </div>
    <div v-if="!device.active" class="card-footer">
      <button class="btn btn-primary" v-on:click="activateDevice">Activate</button>
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
      },
      saveEditing() {
        this.$store.dispatch(
          'devices/updateDevice',
          {
            name: this.name,
            hash: this.device.hash
          }
        )
      },
      activateDevice() {
        this.$store.dispatch('devices/activateDevice', this.device.hash)
      }
    }
  }
</script>
<style scoped>
  .card {
    position: relative;
  }
  .card .status {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>