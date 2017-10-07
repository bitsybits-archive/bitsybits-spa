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
          <a href="#" class="btn btn-link">Dummy</a>
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
          <li class="nav-item">
            <a href="#">Elements</a>
          </li>
          <li class="nav-item active">
            <a href="#">Layout</a>
            <ul class="nav">
              <li class="nav-item">
                <a href="#">Flexbox grid</a>
              </li>
              <li class="nav-item">
                <a href="#">Responsive</a>
              </li>
              <li class="nav-item">
                <a href="#">Navbar</a>
              </li>
              <li class="nav-item">
                <a href="#">Empty states</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#">Components</a>
          </li>
          <li class="nav-item">
            <a href="#">Utilities</a>
          </li>
        </ul>
      </div>

      <div class="off-canvas-content">
        <div class="content">
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
          <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
          <h4>Cupcake ipsum</h4>
          <p>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.</p>
          <p>De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve.</p>
          <h4>Candy ipsum</h4>
          <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>
          <p>Caerphilly swiss fromage frais. Brie cheese and wine fromage frais chalk and cheese danish fontina smelly cheese who moved my cheese cow.</p>
        </div>
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
}

.navbar {
  padding: 0.3rem;
}

.navbar .navbar-sidebar {
  display: none;
}

@media (max-width: 960px) {
  .navbar .navbar-sidebar {
    display: inline-block;
  }
}
</style>
