const moduleB = {
  state: {
    countB: 2
  },
  getters: {
    doubleCountB (state) {
      return state.countB * 2
    }
  },
  mutations: {
    incrementB (state) {
      state.countB++
    }
  }
}

export default moduleB
