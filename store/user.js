export const state = () => ({
  user: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    avatarUrl:
      'https://raw.githubusercontent.com/AmirHosein-Gharaati/portfolio/master/src/assets/images/me.png',
    nationalId: '',
    permissionName: '',
    created_at: '',
  },
})

export const actions = {
  async getUser({ commit }, token) {
    try {
      const { data } = await this.$repositories.user.getUser(token)
      commit('setUser', data)
    } catch (error) {
      console.log(error)
    }
  },
}
export const mutations = {
  setUser(state, newUser) {
    state.user = newUser
  },
}
export const getters = {
  getUser(state) {
    return state.user
  },
}
