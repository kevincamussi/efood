import RestaurantProfile from '../../components/RestaurantProfile'

import Restaurant from '../../models/restaurantModel'

export type Props = {
  restaurant: Restaurant
}

const RestaurantPage = ({ restaurant }: Props) => (
  <>
    <RestaurantProfile restaurant={restaurant} />
  </>
)

export default RestaurantPage
