const resource = '/stores'

export default ($axiosClient) => ({
  getMyStores() {
    return $axiosClient.get(`${resource}/me`)
  },

  getStoreByStoreId(storeId) {
    return $axiosClient.get(`${resource}/${storeId}`)
  },

  getAllStores() {
    return $axiosClient.get(`${resource}/`)
  },

  createStore(data) {
    return $axiosClient.post(`${resource}/create`, data)
  },

  updateStore({ storeId, data }) {
    return $axiosClient.post(`${resource}/update/${storeId}`, data)
  },

  deleteStore(storeId) {
    return $axiosClient.delete(`${resource}/delete/${storeId}`)
  },

  getAllProductsByStoreId(storeId) {
    return $axiosClient.get(`${resource}/products/${storeId}`)
  },

  addProductToStore({ storeId, data }) {
    return $axiosClient.post(`${resource}/products/${storeId}/create`, data)
  },

  updateStoreProduct({ storeId, addressId, data }) {
    return $axiosClient.post(
      `${resource}/products/${storeId}/${addressId}/update`,
      data
    )
  },

  addStoreAddress({ storeId, data }) {
    return $axiosClient.post(`${resource}/addresses/${storeId}/create`, data)
  },

  getStoreAddressesByStoreId(storeId) {
    return $axiosClient.get(`${resource}/addresses/${storeId}`)
  },

  updateStoreAddresses({ storeId, data }) {
    return $axiosClient.post(`${resource}/addresses/${storeId}/update`, data)
  },

  addStoreCategory({ storeId, categoryId }) {
    return $axiosClient.post(
      `${resource}/categories/${storeId}/${categoryId}/create`
    )
  },

  deleteStoreCategory({ storeId, categoryId }) {
    return $axiosClient.delete(
      `${resource}/categories/${storeId}/${categoryId}/delete`
    )
  },
})
