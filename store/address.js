export const state = () => ({
  addresses: [],
})

export const actions = {
  async getAllAddresses() {
    try {
      const res = await this.$repositories.address.getAll()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAddressById(_, id) {
    try {
      const res = await this.$repositories.address.getById(id)
      
      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async createAddress(_, payload) {
    try {
      const res = await this.$repositories.address.create(payload)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateAddress(_, { payload, id }) {
    try {
      const res = await this.$repositories.address.update({ payload, id })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteAddress(_, id) {
    try {
      const res = await this.$repositories.address.delete(id)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
