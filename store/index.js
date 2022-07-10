export const state = () => ({
  main: {
    categories: [],
  },
})

export const actions = {
  async clientInit({ dispatch, getters }) {
    await dispatch('auth/checkUserCookie')
    if (getters['auth/getIsAuthenticated']) {
      await dispatch('user/getUserData')
    }
  },

  async getAllCategories({ commit }) {
    try {
      const res = await this.$repositories.category.getMainCategories()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getSubCategories({}, id) {
    try {
      const res = await this.$repositories.category.getSubCategories(id)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
