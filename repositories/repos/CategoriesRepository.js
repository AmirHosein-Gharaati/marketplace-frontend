const resource = '/categories'

export default ($axios) => ({
  getMainCategories() {
    return $axios.get(`${resource}/main`)
  },

  getSubCategories(id) {
    return $axios.get(`${resource}/subs/${id}`)
  },
})
