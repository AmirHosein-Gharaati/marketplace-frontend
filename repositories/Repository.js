import UserRepository from './repos/UserRepository'
import AuthRepository from './repos/AuthRepository'
import CategoriesRepository from './repos/CategoriesRepository'
import ProductRepository from './repos/ProductRepository'
import ReviewRepository from './repos/ReviewRepository'
import VoteRepository from './repos/VoteRepository'

export default ({ $axios, $axiosClient }) => {
  return {
    auth: AuthRepository($axios),
    user: UserRepository($axios),
    category: CategoriesRepository($axios),
    product: ProductRepository($axios),
    review: ReviewRepository($axiosClient),
    vote: VoteRepository($axiosClient),
  }
}
