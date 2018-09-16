<template>
  <div class="content">
    <device-form />
    <hr />
    <div class="columns">
      <device v-for="item in list" :key="item.hash" :device="item"></device>
    </div>
  </div>
</template>
<script>
  import Device from './device.vue'
  import DeviceForm from './device_form.vue'

  export default {
    components: {
      'device': Device,
      'device-form': DeviceForm
    },
    computed: {
      list() {
        return this.$store.state.devices.list
      }
    },
  }
</script>
<style>
.column {
  margin-top: 8px;
}
</style>