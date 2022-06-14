import UserRepository from './UserRepository'

export default ($axios) => ({
  user: UserRepository($axios),
})
