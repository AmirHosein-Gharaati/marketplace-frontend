import createRepository from '~/repositories/Repository'

export default (ctx, inject) => {
  const { $axios, $axiosClient } = ctx
  
  inject('repositories', createRepository({ $axios, $axiosClient }))
}
