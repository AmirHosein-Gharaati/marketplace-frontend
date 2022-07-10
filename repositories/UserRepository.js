const resource = '/users'

export default ($axios) => ({
  get(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    return $axios.get(`${resource}/me`, config)
  },
})
