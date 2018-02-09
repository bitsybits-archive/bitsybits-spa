<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title h5">{{ device.name }}</div>
      <div class="card-subtitle text-gray">{{ device.hash }}</div>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-primary" v-on:click="deleteDevice(device.hash)">Delete</button>
      </div>
  </div>
</template>
<script>
  export default {
    props: ['device'],
    methods: {
      deleteDevice(device_id) {
        this.$store.dispatch('devices/removeDevice', device_id)
      }
    }
  }
</script>
<style>
</style>