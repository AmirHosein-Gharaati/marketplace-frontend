export const state = () => ({
  myStores: [],
})

export const actions = {
  async getMyStores({ commit }) {
    try {
      const res = await this.$repositories.store.getMyStores()
      commit('setMyStores', res.data.stores)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllStores() {
    try {
      const res = await this.$repositories.store.getAllStores()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getStoreByStoreId(_, storeId) {
    try {
      const res = await this.$repositories.store.getStoreByStoreId(storeId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async createStore(_, data) {
    try {
      const res = await this.$repositories.store.createStore(data)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateStore(_, { storeId, data }) {
    try {
      const res = await this.$repositories.store.updateStore({
        storeId: storeId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteStore(_, storeId) {
    try {
      const res = await this.$repositories.store.deleteStore(storeId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllProductsByStoreId(_, storeId) {
    try {
      const res = await this.$repositories.store.getAllProductsByStoreId(
        storeId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async addProductToStore(_, { storeId, data }) {
    try {
      const res = await this.$repositories.store.addProductToStore({
        storeId: storeId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateStoreProduct(_, { storeId, addressId, data }) {
    try {
      const res = await this.$repositories.store.updateStoreProduct({
        storeId: storeId,
        addressId: addressId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async addStoreAddress(_, { storeId, data }) {
    try {
      const res = await this.$repositories.store.addStoreAddress({
        storeId: storeId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getStoreAddressesByStoreId(_, storeId) {
    try {
      const res = await this.$repositories.store.getStoreAddressesByStoreId(
        storeId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateStoreAddresses(_, { storeId, data }) {
    try {
      const res = await this.$repositories.store.updateStoreAddresses({
        storeId: storeId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async addStoreCategory(_, { storeId, categoryId }) {
    try {
      const res = await this.$repositories.store.addStoreCategory({
        storeId: storeId,
        categoryId: categoryId,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteStoreCategory(_, { storeId, categoryId }) {
    try {
      const res = await this.$repositories.store.deleteStoreCategory({
        storeId: storeId,
        categoryId: categoryId,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {
  setMyStores(state, stores) {
    state.myStores = stores
  },
}

export const getters = {
  getMyStores: (state) => state.myStores,
}
