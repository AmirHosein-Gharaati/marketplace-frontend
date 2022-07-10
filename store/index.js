export const state = () => ({
  main: {},
})

export const actions = {
  async clientInit({ dispatch, getters }) {
    await dispatch('auth/checkUserCookie')
    if (getters['auth/getIsAuthenticated']) {
      dispatch('user/getUser')
    }
  },
}

export const mutations = {}

export const getters = {}
