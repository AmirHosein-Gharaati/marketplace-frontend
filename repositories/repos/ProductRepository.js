const resource = '/products'

export default ({ $axios, $axiosClient }) => ({
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

  getSpecificationKeysByCategoryId(categoryId) {
    return $axios.get(`${resource}/specifications/${categoryId}`)
  },

  getProductsByCategoryId(categoryId) {
    return $axios.get(`${resource}/category/${categoryId}`)
  },

  getSimilarProducts(id) {
    return $axiosClient.get(`${resource}/similar/${id}`)
  },

  getFrequentlyBoughtTogetherProducts(id) {
    return $axiosClient.get(`${resource}/similar/${id}`)
  },
})
