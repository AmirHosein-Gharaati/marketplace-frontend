const userTokenName = 'marketplace_userTokenName'

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

  checkUserCookie({ commit }) {
    if (this.$cookies.get(userTokenName)) {
      commit('setIsAuthenticated', true)
    }
  },

  setUserToken({ commit }, token) {
    this.$cookies.set(userTokenName, token, {
      maxAge: 60 * 60 * 24 * 7,
    })
    commit('setToken', this.$cookies.get(userTokenName))
  },
}

export const mutations = {
  setToken(state, newToken) {
    state.auth.token = newToken
    state.auth.isAuthenticated = true
  },
  setIsAuthenticated(state, value) {
    state.auth.isAuthenticated = value
  },
}

export const getters = {
  getToken: (state) => state.auth.token,
  getIsAuthenticated: (state) => state.auth.isAuthenticated,
}
