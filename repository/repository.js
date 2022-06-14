import UserRepository from './userRepository'

export default ($axios) => ({
  user: UserRepository($axios),
})
