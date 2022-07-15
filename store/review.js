export const state = () => ({
  reviews: [],
  productReview: [],
})

export const actions = {
  async createReview(_, payload) {
    try {
      const res = await this.$repositories.review.create({
        payload,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async updateReview(_, { id, payload }) {
    try {
      const res = await this.$repositories.review.update({ id, payload })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getAllUserReviews() {
    try {
      const res = await this.$repositories.review.getAll()

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductsReviewSortedByDate(_, id) {
    try {
      const res = await this.$repositories.review.getProductReviewSortedByDate({
        id,
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  },

  async getProductsReviewSortedByVotes(_, id) {
    try {
      const res = await this.$repositories.review.getProductReviewSortedByVotes(
        {
          id,
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
