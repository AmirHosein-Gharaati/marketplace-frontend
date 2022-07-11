export const state = () => ({
  products: {},
})

export const actions = {
  async getAllProducts({ commit }) {
    try {
      const res = await this.$repositories.product.getAllProducts()
      commit('setProducts', res.data.store_products)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductById({ commit }, id) {
    try {
      const res = await this.$repositories.product.getProductById(id)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getBrandsByCategoryId({ commit }, categoryId) {
    try {
      const res = await this.$repositories.product.getBrandsByCategoryId(
        categoryId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getPriceRangeByCategoryId({ commit }, categoryId) {
    try {
      const res = await this.$repositories.product.getPriceRangeByCategoryId(
        categoryId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getSpecificationKeysByProductId({ commit }, id) {
    try {
      const res =
        await this.$repositories.product.getSpecificationKeysByProductId(id)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductsByCategoryId({ commit }, categoryId) {
    try {
      const res = await this.$repositories.product.getProductsByCategoryId(
        categoryId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
}
export const getters = {
  getProducts: (state) => state.products,
}