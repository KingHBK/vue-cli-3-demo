const moduleA = {
  namespaced: true,
  state: {
    countA: 1
  },
  getters: {
    doubleCountA (state) {
      return state.countA * 2
    }
  },
  mutations: {
    incrementA (state) {
      state.countA++
    }
  },
  actions: {
    incrementIfOnRootSum ({ state, getters, commit, rootState }) {
      if ((state.countA + rootState.count) % 2 === 1) {
        commit('incrementA')
      }
    }
  }
}

export default moduleA
