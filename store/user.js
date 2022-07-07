export const state = () => ({
  user: {
    id: 1,
    firstName: 'Amirhosein',
    lastName: 'Gharaati',
    email: "amirgh1380@gmail.com",
    phoneNumber: '09365721324',
    avatarUrl: 'https://randomuser.me/api/portraits/women/85.jpg',
    nationalId: '2283169240',
    permissionName: 'normal',
  },
})

export const actions = {
  counterUp({ commit }, newUser) {
    commit('setUser', newUser)
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
