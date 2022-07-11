const resource = '/addresses'

export default ($axiosClient) => ({
  getAll() {
    return $axiosClient.get(`${resource}/`)
  },

  getById(id) {
    return $axiosClient.get(`${resource}/${id}`)
  },

  create(data) {
    return $axiosClient.post(`${resource}/create`, data)
  },

  update({ payload, id }) {
    return $axiosClient.post(`${resource}/update/${id}`, payload)
  },

  delete(id) {
    return $axiosClient.delete(`${resource}/delete/${id}`)
  },
})
