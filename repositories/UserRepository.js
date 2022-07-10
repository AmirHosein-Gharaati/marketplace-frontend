const resource = '/users'

export default ($axios) => ({
  getUser(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    return $axios.post(`${resource}/me`, {}, config)
  },
})
