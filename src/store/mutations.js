const mutations = {
  increment (state, payload) {
    state.count = Number(state.count) + Number(payload.amount)
  },
  increment2 (state) {
    state.count++
  },
  addDoneTodos (state, obj) {
    state.todos.push(obj)
  }
}

export default mutations
