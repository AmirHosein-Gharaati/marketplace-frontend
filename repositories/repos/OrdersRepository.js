const resource = '/orders'

export default ($axiosClient) => ({
  getAllOrders() {
    return $axiosClient.get(`${resource}/me`)
  },

  getOrderByOrderId(orderId) {
    return $axiosClient.get(`${resource}/${orderId}`)
  },

  isUserPaidTheOrder(orderId) {
    return $axiosClient.get(`${resource}/check_payment_status/${orderId}`)
  },

  createOrder() {
    return $axiosClient.post(`${resource}/create`)
  },

  deleteOrder(orderId) {
    return $axiosClient.delete(`${resource}/delete/${orderId}`)
  },

  addProductToOrder({ orderId, data }) {
    return $axiosClient.post(`${resource}/add_product/${orderId}`, data)
  },

  removeProductFromOrder(orderId) {
    /// ??
    return $axiosClient.delete(`${resource}/remove_product/${orderId}`)
  },

  updateProductOrderQuantity({ orderId, data }) {
    return $axiosClient.post(`${resource}/update_quantity/${orderId}`, data)
  },

  getAllProductsInTheOrder(orderId) {
    return $axiosClient.get(`${resource}/products/${orderId}`)
  },

  payOrder({ orderId, data }) {
    return $axiosClient.post(`${resource}/${orderId}`, data)
  },

  applyPromotionCodeToOrder({ orderId, data }) {
    return $axiosClient.post(
      `${resource}/promotion_code/apply/${orderId}`,
      data
    )
  },

  deletePromotionCodeFromOrder(orderId) {
    return $axiosClient.delete(`${resource}/promotion_code/delete/${orderId}`)
  },

  getShippingMethod() {
    return $axiosClient.get(`${resource}/shipping_methods`)
  },

  updateShippingMethod({ orderId, data }) {
    return $axiosClient.post(
      `${resource}//shipping_methods/update/${orderId}`,
      data
    )
  },
})
