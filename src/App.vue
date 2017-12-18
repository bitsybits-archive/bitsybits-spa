<template>
  <div id="app">

    <div class="top-navbar">
      <header class="navbar">
        <section class="navbar-section">
          <label class="navbar-sidebar btn btn-link btn-action" for="sidebar-checkbox">
            <i class="icon icon-menu"></i>
          </label>
        </section>
        <section class="navbar-section">
          <button class="btn btn-link" @click="tryProgress">Try Progress</button>
        </section>
      </header>
      <progress ref="top-progress" class="progress" value="0" max="100"></progress>
    </div>

    <div class="off-canvas ">
      <input type="checkbox" class="off-canvas-checkbox" id="sidebar-checkbox" name="sidebar-checkbox" hidden>
      <label class="off-canvas-toggle" for="sidebar-checkbox"></label>

      <div class="off-canvas-sidebar" style="overflow-y: auto;">
        <ul class="nav">
          <router-link tag="li" to="/" exact class="nav-item">
            <a>Transactions</a>
          </router-link>
          <router-link tag="li" to="/devices" exact class="nav-item">
            <a>Devices</a>
          </router-link>
          <router-link tag="li" to="/settings" exact class="nav-item">
            <a>Settings</a>
          </router-link>
          <router-link tag="li" to="/mqtt" exact class="nav-item">
            <a>MQTT</a>
          </router-link>
        </ul>
      </div>

      <div class="off-canvas-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    tryProgress() {
      this.$refs['top-progress'].removeAttribute("value");
      setTimeout(() => this.$refs['top-progress'].value = 0, 3000);
    }
  }
}
</script>

<style>
#app {}

#editor {
  position: relative;
  height: 15rem;
  width: 100%;
}

.off-canvas {
  top: auto;
}

.off-canvas .off-canvas-content {
  padding: 0.8rem;
}

.progress {
  border-radius: 0;
}

.top-navbar {
  line-height: 0;
  background: #f8f9fa;
}

.navbar {
  padding: 0.3rem;
}

.navbar .navbar-sidebar {
  display: none;
}

.panel .tile {
  margin: .75rem 0;
}

@media (max-width: 960px) {
  .navbar .navbar-sidebar {
    display: inline-block;
  }
}
</style>
