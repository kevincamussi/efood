import * as S from './styles'

import logo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom'

import { Props } from '../../pages/RestaurantPage/index'

import DishesList from '../DishesList'

const RestaurantProfile = ({ restaurant }: Props) => (
  <>
    <S.RestaurantProfileHeader>
      <div className="container">
        <Link to={'/'}>Restaurantes</Link>
        <img src={logo} alt="Logo" />
        <p>0 produtos no carrinho</p>
      </div>
    </S.RestaurantProfileHeader>
    <S.BannerImage image={restaurant.image}>
      <S.Overlay />
      <div className="container">
        <S.RestaurantName>
          <h2>{restaurant.infos}</h2>
          <h2>{restaurant.title}</h2>
        </S.RestaurantName>
      </div>
    </S.BannerImage>
    <DishesList restaurant={restaurant}></DishesList>
  </>
)

export default RestaurantProfile
