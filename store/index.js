export const state = () => ({
  main: {},
})

export const actions = {
  async clientInit({ dispatch, getters }) {
    await dispatch('auth/checkUserCookie')
    if (getters['auth/getIsAuthenticated']) {
      await dispatch('user/getUserData')
    }
  },
}

export const mutations = {}

export const getters = {}
