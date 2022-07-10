const userTokenName = 'marketplace_userTokenName'

export const state = () => ({
  auth: {
    token: '',
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

  setUserToken({ commit }, token) {
    this.$cookies.set(userTokenName, token, {
      maxAge: 60 * 60 * 24 * 7,
    })
    commit('setUserTokenName')
  },
}

export const mutations = {
  setUserTokenName(state) {
    state.auth.token = this.$cookies.get(userTokenName)
  },
}

export const getters = {}
