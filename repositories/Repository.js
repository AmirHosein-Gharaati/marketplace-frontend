import UserRepository from './UserRepository'
import AuthRepository from './AuthRepository'
import CategoriesRepository from './CategoriesRepository'
import ProductRepository from './ProductRepository'
import ReviewRepository from './ReviewRepository'

export default ({ $axios, $axiosClient }) => {
  return {
    auth: AuthRepository($axios),
    user: UserRepository($axios),
    category: CategoriesRepository($axios),
    product: ProductRepository($axios),
    review: ReviewRepository($axiosClient),
  }
}
