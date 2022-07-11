const resource = '/votes'

export default ($axiosClient) => ({
  create(payload) {
    return $axiosClient.post(`${resource}/create`, payload)
  },

  delete(reviewId) {
    return $axiosClient.delete(`${resource}/delete/${reviewId}`)
  },
})
