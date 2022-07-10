const resource = '/reviews'
// TODO
export default ($axios) => ({
  create({data, token}) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return $axios.post(`${resource}/create`, data)
  },

  update({ id, data, token }) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
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
