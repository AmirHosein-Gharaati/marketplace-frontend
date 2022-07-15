import UserRepository from './repos/UserRepository'
import AuthRepository from './repos/AuthRepository'
import CategoriesRepository from './repos/CategoriesRepository'
import ProductRepository from './repos/ProductRepository'
import ReviewRepository from './repos/ReviewRepository'
import VoteRepository from './repos/VoteRepository'
import AddressRepository from './repos/AddressRepository'
import NotificationRepository from './repos/NotificationRepository'
import TicketRepository from './repos/TicketRepository'
import OrdersRepository from './repos/OrdersRepository'

export default ({ $axios, $axiosClient }) => {
  return {
    auth: AuthRepository($axios),
    user: UserRepository($axiosClient),
    category: CategoriesRepository($axios),
    product: ProductRepository({ $axios, $axiosClient }),
    review: ReviewRepository($axiosClient),
    vote: VoteRepository($axiosClient),
    address: AddressRepository($axiosClient),
    notification: NotificationRepository($axiosClient),
    ticket: TicketRepository($axiosClient),
    order: OrdersRepository($axiosClient),
  }
}
