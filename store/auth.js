export const userTokenName = 'marketplace_userTokenName'

export const state = () => ({
  auth: {
    token: '',
    isAuthenticated: false,
  },
})

export const actions = {
  async login({ commit }, payload) {
    try {
      const res = await this.$repositories.auth.login(payload)
      const { data: token } = res.data
      commit('setToken', { token: token, isAuthenticated: true })

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
    await this.$cookies.remove(userTokenName)
    await commit('setToken', { token: '', isAuthenticated: false })
  },

  checkUserCookie({ commit }) {
    const token = this.$cookies.get(userTokenName)

    if (!!token) {
      commit('setToken', { token: token, isAuthenticated: true })
    } else {
      commit('setToken', { token: '', isAuthenticated: false })
    }
  },
}

export const mutations = {
  setToken(state, { token, isAuthenticated }) {
    this.$cookies.set(userTokenName, token, {
      maxAge: 60 * 60 * 24 * 3,
      path: '/',
    })
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
