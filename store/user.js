export const state = () => ({
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    avatarUrl:
      'https://raw.githubusercontent.com/AmirHosein-Gharaati/portfolio/master/src/assets/images/me.png',
    nationalId: '',
    permissionName: '',
  },
})

export const actions = {
  async testRepo() {},
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
