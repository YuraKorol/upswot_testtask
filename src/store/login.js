import router from '@/router/index.js'

export default {
  state: {
    isLogged: false,
    user: null,
    users: [
      {
        username: 'Admin',
        password: '12345'
      }
    ]
  },
  mutations: {
    LOGIN_USER(state, payload) {
      state.user = payload
      state.isLogged = true
      localStorage.setItem('user', JSON.stringify(state.user))
      localStorage.setItem('isLogged', state.isLogged)
      router.push('/todo')
    },
    LOAD_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    LOGIN_USER({ commit, state, dispatch }, payload) {
      state.users.map(i => {
        if (i.username !== payload.username || i.password !== payload.password) {
          dispatch('SET_ERROR', 'Username or password does not match')
        } else {
          commit('LOGIN_USER', payload)
        }
      })
    },
    LOAD_USER({ commit, dispatch }) {
      const user = JSON.parse(localStorage.getItem('user'))
      const isLogged = JSON.parse(localStorage.getItem('isLogged'))
      console.log(user)
      if (!user) {
        router.push('/')
        dispatch('SET_ERROR', 'Username or password does not match')
      }
      if (isLogged === true) {
        commit('LOAD_USER', user)
      }
    }
  },
  getters: {
    user: state => state.user
  }
}
