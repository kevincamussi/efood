import {
  RestaurantProfileHeader,
  Overlay,
  BannerImage,
  RestaurantName
} from './styles'

import logo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom'

import { Props } from '../../pages/RestaurantPage/index'

import DishesList from '../DishesList'

const RestaurantProfile = ({ restaurant }: Props) => (
  <>
    <RestaurantProfileHeader>
      <div className="container">
        <Link to={'/'}>Restaurantes</Link>
        <img src={logo} alt="Logo" />
        <p>0 produtos no carrinho</p>
      </div>
    </RestaurantProfileHeader>
    <BannerImage image={restaurant.image}>
      <Overlay />
      <div className="container">
        <RestaurantName>
          <h3>{restaurant.infos}</h3>
          <h2>{restaurant.title}</h2>
        </RestaurantName>
      </div>
    </BannerImage>
    <DishesList restaurant={restaurant}></DishesList>
  </>
)

export default RestaurantProfile
