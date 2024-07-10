import { DishContainer } from './styles'

import Dish from '../Dish'

import { Props } from '../../pages/RestaurantPage'

const DishesList = ({ restaurant }: Props) => (
  <>
    <DishContainer className="container">
      <Dish restaurant={restaurant} />
    </DishContainer>
  </>
)

export default DishesList
