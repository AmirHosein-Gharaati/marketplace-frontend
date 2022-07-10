const resource = '/auth/token'

export default ($axios) => ({
  login(data) {
    return $axios.post(`${resource}`, data)
  },
})
