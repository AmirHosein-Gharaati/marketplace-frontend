export const state = () => ({
  orders: [],
})

export const actions = {
  async getAllOrders({ commit }) {
    try {
      const res = await this.$repositories.order.getAllOrders()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getOrderByOrderId(_, orderId) {
    try {
      const res = await this.$repositories.order.getOrderByOrderId(orderId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async isUserPaidTheOrder(_, orderId) {
    try {
      const res = await this.$repositories.order.isUserPaidTheOrder(orderId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async createOrder() {
    try {
      const res = await this.$repositories.order.createOrder()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteOrder(_, orderId) {
    try {
      const res = await this.$repositories.order.deleteOrder(orderId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async addProductToOrder(_, { orderId, data }) {
    try {
      const res = await this.$repositories.order.deleteOrder({
        orderId: orderId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async removeProductFromOrder(_, orderId) {
    try {
      const res = await this.$repositories.order.removeProductFromOrder(orderId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateProductOrderQuantity(_, { orderId, data }) {
    try {
      const res = await this.$repositories.order.updateProductOrderQuantity({
        orderId: orderId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllProductsInTheOrder(_, orderId) {
    try {
      const res = await this.$repositories.order.getAllProductsInTheOrder(
        orderId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async payOrder(_, { orderId, data }) {
    try {
      const res = await this.$repositories.order.payOrder({
        orderId: orderId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async applyPromotionCodeToOrder(_, { orderId, data }) {
    try {
      const res = await this.$repositories.order.applyPromotionCodeToOrder({
        orderId: orderId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deletePromotionCodeFromOrder(_, orderId) {
    try {
      const res = await this.$repositories.order.deletePromotionCodeFromOrder(
        orderId
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getShippingMethod() {
    try {
      const res = await this.$repositories.order.getShippingMethod()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateShippingMethod(_, { orderId, data }) {
    try {
      const res = await this.$repositories.order.updateShippingMethod({
        orderId: orderId,
        data: data,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
