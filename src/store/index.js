import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './actions'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    moduleA,
    moduleB
  },
  state: {
    count: 10,
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'bbb', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count = Number(state.count) + Number(payload.amount)
    },
    increment2 (state) {
      state.count++
    },
    addDoneTodos (state, obj) {
      state.todos.push(obj)
    }
  },
  actions: {
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
})

export default store
