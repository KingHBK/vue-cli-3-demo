const actions = {
  increment ({ commit }) {
    commit('increment2')
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment2')
    }, 1000)
  },
  incrementPromise ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment2')
        resolve()
      }, 2000)
    })
  },
  actionB ({ dispatch, commit }) {
    return dispatch('incrementPromise').then(() => {
      commit('increment', { amount: 2 })
    })
  }
}

export default actions
