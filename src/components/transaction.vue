<template>
  <div class="tile tile-centered">
    <div class="tile-icon tooltip tooltip-bottom"
        :class="status_class"
        :data-tooltip="this.transaction.status">
    </div>
    <div class="tile-content">
      <div class="tile-title"><b>Name:</b> {{ device.name }}</div>
      <div class="tile-subtitle"><b>Hash:</b> {{ device.hash }}</div>
      <div class="tile-subtitle"><b>Instruction:</b></div>
      <div class="tile-subtitle">{{ short_instruction }}</div>
      <div class="tile-subtitle">
        <b>Link:</b>
        <a :href="transaction.url">transaction</a>
      </div>
    </div>
    <div class="tile-action">
      <button class="btn btn-link btn-action btn-lg tooltip tooltip-bottom"
              data-tooltip="Rerun"
      >
        <i class="icon icon-edit"></i>
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['transaction'],
    computed: {
      device() {
        return this.$store.state.devices.list.find(device => device.hash == this.transaction.hash) || { 'name': 'no name', 'hash': this.transaction.hash, 'active': false };
      },
      short_instruction(){
        return `${this.transaction.instruction.substring(0, 64)}...`;
      },
      status_class() {
        return `tile-icon-${this.transaction.status}`
      }
    },
  }
</script>
<style>
  .tile {
    position: relative;
    border-bottom: 1px solid #50596c;
  }
  .tile .tile-title {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  .tile .tile-icon {
    position: absolute;
    right: 15px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
  .tile-icon.tile-icon-success {
    background: rgba(50,182,67,.9);
  }

  .tile-icon.tile-icon-warning {
    background: rgba(255,183,0,.9);
  }

  .tile-icon.tile-icon-error {
    background: rgba(232,86,0,.9);
  }
</style>