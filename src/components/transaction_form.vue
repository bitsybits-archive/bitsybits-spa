<template>
  <pre id="editor"></pre>
</template>

<script>
  import 'ace-builds/src-noconflict/ace.js'
  import 'ace-builds/src-noconflict/mode-lisp.js'
  import 'ace-builds/src-noconflict/theme-tomorrow.js'

  export default {
    props: [
      'transaction',
      'mode'
    ],
    data: function(){
      return {
        'editor': null,
      }
    },
    mounted: function() {
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/tomorrow");
        this.editor.session.setMode("ace/mode/lisp");
        this.editor.$blockScrolling = Infinity;

    },
    watch: {
      'transaction': function(_new, _old) {
        this.editor.session.setValue(_new);
      },
      'mode': function(_new, _old) {
        this.editor.setReadOnly(_new == 'view');
      }
    },
  }
</script>

<style>
</style>