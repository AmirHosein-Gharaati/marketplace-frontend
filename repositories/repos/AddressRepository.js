const resource = '/addresses'

export default ($axiosClient) => ({
  getAll() {
    return $axiosClient.get(`${resource}/`)
  },

  create(data) {
    return $axiosClient.post(`${resource}/create`, data)
  },

  update({ data, id }) {
    return $axiosClient.post(`${resource}/update/${id}`, data)
  },

  delete(id) {
    return $axiosClient.delete(`${resource}/delete/${id}`)
  },
})
