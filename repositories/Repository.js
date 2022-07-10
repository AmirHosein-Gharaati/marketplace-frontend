import UserRepository from './UserRepository'
import AuthRepository from './AuthRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  user: UserRepository($axios),
})
