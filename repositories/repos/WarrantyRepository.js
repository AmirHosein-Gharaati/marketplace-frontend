const resource = '/warranty'

export default ({ $axiosClient, $axios }) => ({
  getWarrantyById(warrantyId) {
    return $axios.get(`${resource}/${warrantyId}`)
  },

  getWarrantyByStoreProduct({ productId, storeId }) {
    return $axios.get(`${resource}/product/${productId}/${storeId}`)
  },

  create(data) {
    return $axiosClient.post(`${resource}/create`, data)
  },
})
