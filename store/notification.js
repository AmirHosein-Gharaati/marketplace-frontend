export const state = () => ({
  notification: {},
})

export const actions = {
  async getAllAvailable() {
    try {
      const res = await this.$repositories.notification.getAllAvailable()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllPending() {
    try {
      const res = await this.$repositories.notification.getAllPending()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async subscribe(_, productId) {
    try {
      const res = await this.$repositories.notification.subscribe(productId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async sendSeen(_, productId) {
    try {
      const res = await this.$repositories.notification.sendSeen(productId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
