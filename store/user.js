export const state = () => ({
  user: {
    name: 'Amir'
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
