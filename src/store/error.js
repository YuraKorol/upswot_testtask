export default {
  state: {
    isError: false,
    error: ''
  },
  mutations: {
    CLEAR_ERROR(state) {
      state.isError = false
      state.error = ''
    },
    SET_ERROR(state, payload) {
      state.isError = true
      state.error = payload
    }
  },
  actions: {
    SET_ERROR({ commit }, payload) {
      commit('SET_ERROR', payload)
      setTimeout(() => {
        commit('CLEAR_ERROR')
      }, 2000)
    }
  },
  getters: {
    error: state => state.error,
    isError: state => state.isError
  }
}
