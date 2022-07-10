export const state = () => ({
  main: {},
})

export const actions = {
  async clientInit({ dispatch, getters }) {
    await dispatch('auth/checkUserCookie')
    if (getters['auth/getIsAuthenticated']) {
      const token = getters['auth/getToken']
      dispatch('user/getUserData')
    }
  },
}

export const mutations = {}

export const getters = {}
