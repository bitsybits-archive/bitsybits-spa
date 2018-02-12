import DB from './../db'

const transactions = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    addToList(state, transaction) {
      state.list.push(transaction);
    },
    loadList(state, transactions) {
      state.list = transactions;
    },
  },
  actions: {
    fetchAll(context) {
      DB.transactions.toArray().then(function(transactions){
        context.commit('loadList', transactions)
      })
    }
  }
}

export default transactions;