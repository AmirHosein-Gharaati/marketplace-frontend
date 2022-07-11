export default function ({ $axios, store }, inject) {
  const axiosClient = $axios.create()
  const token = store.getters['auth/getToken']

  axiosClient.setToken(token, 'Bearer')

  inject('axiosClient', axiosClient)
}
