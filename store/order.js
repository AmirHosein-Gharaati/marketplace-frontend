export const state = () => ({
  orders: [],
})

export const actions = {
  async getAllOrders({ commit }) {
    try {
      const res = await this.$repositories.order.getAllOrders()

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
