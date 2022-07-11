export const userTokenName = 'marketplace_userTokenName'

export const state = () => ({
  auth: {
    token: '',
    isAuthenticated: false,
  },
})

export const actions = {
  async login({ dispatch }, payload) {
    try {
      const res = await this.$repositories.auth.login(payload)
      const { data: token } = res.data

      if (this.$cookies.get(userTokenName) !== token) {
        dispatch('setUserToken', token)
      }

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async signUp({ dispatch }, payload) {
    try {
      const res = await this.$repositories.auth.signUp(payload)

      if (res.data.status == 'ok') {
        await dispatch('login', {
          email: payload.email,
          password: payload.password,
        })
      }

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async logout({ commit }) {
    this.$cookies.remove(userTokenName)
    commit('setToken', { token: '', isAuthenticated: false })
  },

  checkUserCookie({ commit, dispatch }) {
    const token = this.$cookies.get(userTokenName)

    if (token) {
      dispatch('setUserToken', token)
    } else {
      commit('setToken', { token: '', isAuthenticated: false })
    }
  },

  setUserToken({ commit }, token) {
    this.$cookies.set(userTokenName, token, {
      maxAge: 60 * 60 * 24 * 3,
    })
    commit('setToken', { token: token, isAuthenticated: true })
  },
}

export const mutations = {
  setToken(state, { token, isAuthenticated }) {
    state.auth.token = token
    state.auth.isAuthenticated = isAuthenticated
  },
  setIsAuthenticated(state, value) {
    state.auth.isAuthenticated = value
  },
}

export const getters = {
  getToken: (state) => state.auth.token,
  getIsAuthenticated: (state) => state.auth.isAuthenticated,
}
