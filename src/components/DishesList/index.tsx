import { DishContainer } from './styles'

import Dish from '../Dish'

import { Props } from '../../pages/RestaurantPage'
import Footer from '../Footer'

const DishesList = ({ restaurant }: Props) => (
  <>
    <DishContainer className="container">
      <Dish restaurant={restaurant} />
    </DishContainer>
    <Footer />
  </>
)

export default DishesList
