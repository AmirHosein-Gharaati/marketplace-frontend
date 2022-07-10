const resource = '/auth'

export default ($axios) => ({
  login(data) {
    return $axios.post(`${resource}/token`, data)
  },

  signUp(data) {
    return $axios.post(`${resource}/signup`, data)
  },
})
