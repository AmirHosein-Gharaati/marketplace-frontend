export const state = () => ({
  reviews: [],
  productReview: [],
})

export const actions = {
  async createReview({ rootGetters }, payload) {
    try {
      const token = rootGetters['auth/getToken']
      const res = await this.$repositories.review.createReview({
        payload,
        token,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateReview({ rootGetters }, { id, payload }) {
    try {
      const token = rootGetters['auth/getToken']
      const res = await this.$repositories.review.update({ id, payload, token })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getUserAllReviews({ rootGetters }) {
    try {
      const token = rootGetters['auth/getToken']
      const res = await this.$repositories.review.getAll(token)

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductsReviewSortedById({ rootGetters }, id) {
    try {
      const token = rootGetters['auth/getToken']
      const res = await this.$repositories.review.getProductReviewSortedByDate({
        id,
        token,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductsReviewSortedByVotes({ rootGetters }, id) {
    try {
      const token = rootGetters['auth/getToken']
      const res = await this.$repositories.review.getProductReviewSortedByVotes(
        {
          id,
          token,
        }
      )

      return res.data
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {}

export const getters = {}
