import UserRepository from './UserRepository'
import AuthRepository from './AuthRepository'
import CategoriesRepository from './CategoriesRepository'
import ProductRepository from './ProductRepository'

export default ($axios) => ({
  auth: AuthRepository($axios),
  user: UserRepository($axios),
  category: CategoriesRepository($axios),
  product: ProductRepository($axios),
})
