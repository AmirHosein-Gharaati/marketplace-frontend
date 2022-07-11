const resource = '/users'

export default ($axiosClient) => ({
  get() {
    return $axiosClient.get(`${resource}/me`)
  },

  getById(id) {
    return $axiosClient.get(`${resource}/${id}`)
  }
})
