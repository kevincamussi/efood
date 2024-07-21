import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { HeaderContainer, RestaurantProfileHeader } from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'

export const MainHeader = () => (
  <HeaderContainer>
    <img src={logo} alt="Logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderContainer>
)

export const RestaurantPageHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <RestaurantProfileHeader>
      <div className="container">
        <Link to={'/'}>Restaurantes</Link>
        <img src={logo} alt="Logo" />
        <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
      </div>
    </RestaurantProfileHeader>
  )
}
