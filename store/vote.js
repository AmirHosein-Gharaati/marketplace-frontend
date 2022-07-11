export const state = () => ({
  vote: {},
})

export const actions = {
  async createVote(_, payload) {
    try {
      const res = await this.$repositories.vote.create(payload)
      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteVote(_, reviewId) {
    try {
      const res = await this.$repositories.vote.delete(reviewId)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
