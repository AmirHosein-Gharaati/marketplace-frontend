export default function ({ $axios, store }, inject) {
  const axiosClient = $axios.create()

  axiosClient.onRequest((config) => {
    const token = store.getters['auth/getToken']
    if (!!token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
  })

  inject('axiosClient', axiosClient)
}
