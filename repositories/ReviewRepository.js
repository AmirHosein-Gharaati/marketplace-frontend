const resource = '/reviews'
// TODO
export default ($axiosClient) => ({
  create({ data }) {
    return $axiosClient.post(`${resource}/create`, data)
  },

  update({ id, data }) {
    return $axiosClient.put(`${resource}/update/${id}`, data)
  },

  getAll() {
    return $axiosClient.get(`${resource}/me`, config)
  },

  getProductReviewSortedByDate({ id }) {
    return $axiosClient.get(`${resource}/product/${id}`)
  },

  getProductReviewSortedByVotes({ id }) {
    const config = {
      params: {
        sorted_by: 'vote',
      },
    }
    return $axiosClient.get(`${resource}/product/${id}`, config)
  },
})
