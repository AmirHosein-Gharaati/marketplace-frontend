const resource = '/products'

export default ($axios) => ({
  getAllProducts() {
    return $axios.get(`${resource}/stores/`, data)
  },

  getProductById(productId) {
    return $axios.get(`${resource}/${productId}`)
  },

  getBrandsByCategoryId(categoryId) {
    return $axios.get(`${resource}/brands/${categoryId}`)
  },

  getPriceRangeByCategoryId(categoryId) {
    return $axios.get(`${resource}/price_range/${categoryId}`)
  },

  getSpecificationKeysByProductId(productId) {
    return $axios.get(`${resource}/specifications/${productId}`)
  },

  getProductsByCategoryId(categoryId) {
    return $axios.get(`${resource}/category/${categoryId}`)
  },
})
