const resource = '/auth/token'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  getUser(data) {
    return $axios.post(`${resource}`, data)
  },

  get(id) {
    return $axios.get(`${resource}/${id}`)
  },

  create(payload) {
    return $axios.post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },
})
