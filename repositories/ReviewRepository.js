const resource = '/reviews'

export default ($axios) => ({
  create(data) {
    return $axios.post(`${resource}/create`, data)
  },

  update({ id, data }) {
    return $axios.put(`${resource}/update/${id}`, data)
  },

  getAll(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return $axios.get(`${resource}/me`, config)
  },

  getProductReviewSortedByDate({ id, token }) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return $axios.get(`${resource}/product/${id}`)
  },

  getProductReviewSortedByVotes({ id, token }) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        sorted_by: 'vote',
      },
    }

    return $axios.get(`${resource}/product/${id}`, config)
  },
})
