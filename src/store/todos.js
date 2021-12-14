export default {
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push(payload)
    },
    EDIT_TODO(state, payload) {
      state.todos.find(i => i._id === payload._id).title = payload.title
    },
    DELETE_TODO(state, payload) {
      const index = state.todos.findIndex(item => item._id === payload._id)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    ADD_TODO({ commit }, payload) {
      commit('ADD_TODO', payload)
      commit('CLOSE_ADD_TODO_MODAL')
    },
    DELETE_TODO({ commit }, payload) {
      commit('DELETE_TODO', payload)
    },
    EDIT_TODO({ commit }, payload) {
      commit('EDIT_TODO', payload)
    }
  },
  getters: {
    todos: state => state.todos
  }
}
