import UserRepository from './UserRepository'
import AuthRepository from './AuthRepository'
import CategoriesRepository from './CategoriesRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  user: UserRepository($axios),
  category: CategoriesRepository($axios),
})
