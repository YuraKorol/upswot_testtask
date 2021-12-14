import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/login'
import error from '@/store/error'
import todos from '@/store/todos'
import modal from '@/store/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    error,
    login,
    todos,
    modal
  }
})
