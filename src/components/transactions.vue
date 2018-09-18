<template>
  <div class="content">
    <div class="columns">
      <div class="column col-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="panel">
          <div class="panel-header text-center">
            <div class="panel-title h5 mt-10">Bruce Banner</div>
            <div class="panel-subtitle">THE HULK</div>
          </div>
          <nav class="panel-nav">
            <div class="panel-title h5 mt-10 text-center">Transactions</div>
          </nav>
          <div class="panel-body">
            <transaction v-for="transaction_data in transactions_data"
            :key="transaction_data.id"
            :transaction="transaction_data"
            :clickHandler="clickHandler"
            :rerunHandler="rerunHandler"
            />
          </div>
          <div class="panel-footer">
            <button class="btn btn-primary btn-block" v-on:click="newTransaction">New</button>
          </div>
        </div>
      </div>
      <div class="column col-9 col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title h5">{{ 'transaction_data.hash' }}</div>
            <div class="h6">{{ 'transaction_data.url' }}</div>
          </div>
          <div class="panel-body">
            <transaction-form :transaction="editor_instruction"
                              :mode="editor_mode"
            />
          </div>
          <div class="panel-footer">

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Transaction from './transaction.vue'
  import TransactionForm from './transaction_form.vue'

  const example_text = `
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

    "asdad\0eqweqe"
  `
  const example_text_2 = `
    (defun prompt-for-cd ()
    "Prompts
    for CD"
    (prompt-read "Title" 1.53 1 2/4 1.7 1.7e0 2.9E-4 +42 -7 #b001 #b001/100 #o777 #O777 #xabc55 #c(0 -5.6))
  `

  const example_text_3 = `
    (if x (format t "yes") (format t "no" nil) ;and here comment
    ) 0xFFLL -23ull
    ;; second line comment
  `
  export default {
    components: {
      'transaction': Transaction,
      'transaction-form': TransactionForm
    },
    data: function(){
      return {
        editor_mode: 'new',
        editor_instruction: null,
        editor_device_hash: null,
        transactions_data: [
          {
            'id': 1,
            'hash': 'jdf657sdg97556jdfjh75f68',
            'instruction': example_text,
            'url': 'www.example.com',
            'status': 'success'
          },
          {
            'id': 2,
            'hash': 'sdfgsdfgsdfgsdfgwer23rwfe',
            'instruction': example_text_2,
            'url': 'www.example.com',
            'status': 'warning'
          },
          {
            'id': 3,
            'hash': 'asdgsdfgsdfgwfasfawerfseag',
            'instruction': example_text_3,
            'url': 'www.example.com',
            'status': 'error'
          },
        ]
      }
    },
    methods: {
      clickHandler(transaction_id) {
        this.editor_instruction = this.transactions_data.find(t => t.id == transaction_id).instruction;
        this.editor_mode = 'view';
      },
      rerunHandler(transaction_id) {
        this.editor_instruction = this.transactions_data.find(t => t.id == transaction_id).instruction;
        this.editor_mode = 'edit';
      },
      newTransaction() {
        this.editor_instruction = '';
        this.editor_mode = 'edit';
      }
    }
  }
</script>

<style>
</style>