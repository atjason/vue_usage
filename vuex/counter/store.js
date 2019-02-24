import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
}

// getters are functions
const getters = {
  evenOrOdd(state) {
    return (state.count % 2 === 0) ? 'even' : 'odd'
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    state.count++
  },

  incrementBy(state, payload) {
    state.count += payload.count
  }
}

// actions are functions that cause side effects 
// and can involve asynchronous operations.
const actions = {
  increment({ commit }) {
    commit('increment')
  },

  incrementBy({ commit }, payload) {
    commit('incrementBy', payload)
  },

  incrementIfOdd({ getters, dispatch}) {
    if (getters.evenOrOdd === 'odd') {
      dispatch('increment')
    }
  },

  incrementAsync({ dispatch }) {
    return new Promise(resolve => {
      setTimeout(() => {
        dispatch('increment')
        resolve()
      }, 1000)
    })
  },
}

// A Vuex instance is created by combining 
// the state, mutations, actions, and getters.
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})