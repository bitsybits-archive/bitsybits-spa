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

          <div class="columns">
            <div class="column col-3 col-xs-12">
              <div class="panel">
                <div class="panel-header text-center">
                  <div class="panel-title h5 mt-10">Bruce Banner</div>
                  <div class="panel-subtitle">THE HULK</div>
                </div>
                <nav class="panel-nav">
                  <ul class="tab tab-block">
                    <li class="tab-item active">
                      <a href="#panels">
                        Profile
                      </a>
                    </li>
                    <li class="tab-item">
                      <a href="#panels">
                        Files
                      </a>
                    </li>
                    <li class="tab-item">
                      <a href="#panels">
                        Tasks
                      </a>
                    </li>
                  </ul>
                </nav>
                <div class="panel-body">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title">E-mail</div>
                      <div class="tile-subtitle">bruce.banner@hulk.com</div>
                    </div>
                    <div class="tile-action">
                      <button class="btn btn-link btn-action btn-lg">
                        <i class="icon icon-edit"></i>
                      </button>
                    </div>
                  </div>
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title">Skype</div>
                      <div class="tile-subtitle">bruce.banner</div>
                    </div>
                    <div class="tile-action">
                      <button class="btn btn-link btn-action btn-lg">
                        <i class="icon icon-edit"></i>
                      </button>
                    </div>
                  </div>
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title">Location</div>
                      <div class="tile-subtitle">Dayton, Ohio</div>
                    </div>
                    <div class="tile-action">
                      <button class="btn btn-link btn-action btn-lg">
                        <i class="icon icon-edit"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="panel-footer">
                  <button class="btn btn-primary btn-block">Save</button>
                </div>
              </div>
            </div>
            <div class="column col-9 col-xs-12">
              <div class="panel">
                <div class="panel-header">
                  <div class="panel-title h5">Comments</div>
                  <div class="h6">Comments</div>
                </div>
                <div class="panel-body">
                  <pre id="editor">
(defun prompt-for-cd ()
   "Prompts
    for CD"
   (prompt-read "Title" 1.53 1 2/4 1.7 1.7e0 2.9E-4 +42 -7 #b001 #b001/100 #o777 #O777 #xabc55 #c(0 -5.6))
   (prompt-read "Artist" &rest)
   (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
  (if x (format t "yes") (format t "no" nil) ;and here comment
  ) 0xFFLL -23ull
  ;; second line comment
  '(+ 1 2)
  (defvar *lines*)                ; list of all lines
  (position-if-not #'sys::whitespacep line :start beg))
  (quote (privet 1 2 3))
  '(hello world)
  (* 5 7)
  (1 2 34 5)
  (:use "aaaa")
  (let ((x 10) (y 20))
    (print (+ x y))
  ) LAmbDa

  "asdad\0eqweqe"</pre>
                </div>
                <div class="panel-footer">

                </div>
              </div>
            </div>
          </div>

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

  mounted: function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.session.setMode("ace/mode/lisp");
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
