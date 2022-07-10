export const state = () => ({
  user: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    avatar_url: '/profile.jpg',
    national_id: '',
    permission_name: '',
    createdAt: '',
  },
})

export const actions = {
  async getUserData({ commit, rootGetters }) {
    try {
      const token = rootGetters['auth/getToken']

      const { data } = await this.$repositories.user.get(token)
      commit('setUser', data.user)
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {
  setUser(state, newUser) {
    state.user = newUser
    state.user.avatar_url = '/profile.jpg'
  },
}
export const getters = {
  getUser(state) {
    return state.user
  },
}
