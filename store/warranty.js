export const state = () => ({})

export const actions = {
  async getWarrantyById(_, warrantyId) {
    try {
      const res = await this.$repositories.warranty.getWarrantyById(warrantyId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getWarrantyByStoreProduct(_, { productId, storeId }) {
    try {
      const res = await this.$repositories.warranty.getWarrantyByStoreProduct({
        productId: productId,
        storeId: storeId,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async create(_, data) {
    try {
      const res = await this.$repositories.warranty.getWarrantyByStoreProduct(
        data
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
