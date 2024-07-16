import { Link } from 'react-router-dom'

import { HeaderContainer, RestaurantProfileHeader } from './styles'

import logo from '../../assets/images/logo.png'

export const MainHeader = () => (
  <HeaderContainer>
    <img src={logo} alt="Logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderContainer>
)

export const RestaurantPageHeader = () => (
  <RestaurantProfileHeader>
    <div className="container">
      <Link to={'/'}>Restaurantes</Link>
      <img src={logo} alt="Logo" />
      <p>0 produtos no carrinho</p>
    </div>
  </RestaurantProfileHeader>
)
