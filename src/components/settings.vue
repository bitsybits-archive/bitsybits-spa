<template>
  <div class="content">
    <div class="columns">
      <div class="column col-6">
        <p class="text-center">
          <button v-on:click="exportDB" class="btn btn-lg">Export</button>
        </p>
      </div>
      <div class="column col-6">
        <p class="text-center">
          <input name="file" v-on:change="importFile" ref="file_input" type="file" class="btn btn-lg">
          <button v-on:click="openFile" class="btn btn-lg">Import</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import DB from '../store/db'
  import IDBImportExport from 'indexeddb-export-import'

  export default {
    data: function() {
        return {
            file: null
        }
    },
    methods: {
      openFile() {
        this.$refs.file_input.click()
      },
      exportDB() {
        const idb_db = DB.backendDB();

        IDBImportExport.exportToJsonString(idb_db, function(err, jsonString) {
          const file_name = 'db.json';
          const file_data = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });

          if (navigator.msSaveBlob) {
              navigator.msSaveBlob(file_data, file_name);
          } else {
              //In FF link must be added to DOM to be clicked
              let link = document.createElement('a');
              link.href = window.URL.createObjectURL(file_data);
              link.setAttribute('download', file_name);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
        });
      },
      importFile(e) {
        const self = this;
        const file_input = this.$refs.file_input
        const files = e.target.files || e.dataTransfer.files;
        const reader = new FileReader();
        if (!files.length) { return; };

        reader.onload = (e) => {
          const idb_db = DB.backendDB();
          let db_data = e.target.result;
          console.log(db_data);
          IDBImportExport.clearDatabase(idb_db, function(err) {
            console.log(!err);
            console.log(JSON.parse(db_data));
            if(!err) {
              IDBImportExport.importFromJsonString(idb_db, db_data, function(err) {
                file_input.type = 'text';
                file_input.type = 'file';
                self.$store.dispatch('fetchAll');
              });
            };
          });
        };
        reader.readAsText(files[0])
      }
    }
  }
</script>

<style scoped>
input[type='file'] {
  display: none;
}
</style>
