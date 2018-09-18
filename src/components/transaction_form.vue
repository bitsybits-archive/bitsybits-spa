<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title h5">{{ transaction_data.hash }}</div>
      <div class="h6">{{ transaction_data.url }}</div>
    </div>
    <div class="panel-body">
      <pre id="editor">{{ transaction_data.instruction }}</pre>
    </div>
    <div class="panel-footer">

    </div>
  </div>
</template>

<script>
  import 'ace-builds/src-noconflict/ace.js'
  import 'ace-builds/src-noconflict/mode-lisp.js'
  import 'ace-builds/src-noconflict/theme-tomorrow.js'

  export default {
    props: [
      'transaction'
    ],
    data: function(){
      return {
        'transaction_data': {},
        'editor': null,
      }
    },
    mounted: function() {
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/tomorrow");
        this.editor.session.setMode("ace/mode/lisp");
    },
    watch: {
      'transaction': function(_new, _old) {
        console.log(_new);
        if (_new) {
          this.editor.session.setValue(_new.instruction);
        }
      }
    },
  }
</script>

<style>
</style>