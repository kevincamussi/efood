import Restaurant from '../Restaurant'

import { RestaurantsListContainer } from './styles'

const RestaurantsList = () => (
  <RestaurantsListContainer>
    <div className="container">
      <Restaurant />
    </div>
  </RestaurantsListContainer>
)

export default RestaurantsList
