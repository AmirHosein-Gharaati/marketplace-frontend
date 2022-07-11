import createRepository from '~/repositories/Repository'

export default (ctx, inject) => {
  inject(
    'repositories',
    createRepository({ $axios: ctx.$axios, $axiosClient: ctx.$axiosClient })
  )
}
