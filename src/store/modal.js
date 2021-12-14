export default {
  state: {
    isOpenTodoModal: false,
    todo: {}
  },
  mutations: {
    OPEN_ADD_TODO_MODAL(state, payload) {
      state.isOpenTodoModal = true
      state.todo = payload
    },
    CLOSE_ADD_TODO_MODAL(state) {
      state.isOpenTodoModal = false
    }
  },
  actions: {
    OPEN_ADD_TODO_MODAL({ commit }, payload) {
      commit('OPEN_ADD_TODO_MODAL', payload)
    },
    CLOSE_ADD_TODO_MODAL({ commit }) {
      commit('CLOSE_ADD_TODO_MODAL')
    }
  },
  getters: {
    isOpenTodoModal: state => state.isOpenTodoModal,
    todo: state => state.todo
  }
}
