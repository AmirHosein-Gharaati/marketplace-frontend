const resource = '/notifications'

export default ($axiosClient) => ({
  getAllAvailable() {
    return $axiosClient.get(`${resource}/`)
  },

  getAllPending() {
    return $axiosClient.get(`${resource}/pending`)
  },

  subscribe(productId) {
    return $axiosClient.post(`${resource}/subscribe/${productId}`)
  },

  unsubscribe(productId) {
    return $axiosClient.delete(`${resource}/unsubscribe/${productId}`)
  },

  sendSeen(productId) {
    return $axiosClient.post(`${resource}/seen/${productId}`)
  },
})
