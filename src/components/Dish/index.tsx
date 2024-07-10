import Button from '../Button'
import { DishCard } from './styles'

import { Props } from '../../pages/RestaurantPage'

const Dish = ({ restaurant }: Props) => (
  <>
    {restaurant.dishes.map((dish) => (
      <DishCard key={dish.id}>
        <img src={dish.image} alt="" />
        <h2>{dish.title}</h2>
        <p>{dish.description}</p>
        <Button type="button"> Adicionar ao carrinho</Button>
      </DishCard>
    ))}
  </>
)

export default Dish
