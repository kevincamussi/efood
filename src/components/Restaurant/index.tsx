import * as S from './styles'

import restaurants from '../../api/api'
import Button from '../Button'

import star from '../../assets/images/star.png'
import Tag from '../Tag'

const Restaurant = () => (
  <>
    {restaurants.map((restaurant) => (
      <S.Card key={restaurant.id}>
        <img src={restaurant.image} alt={restaurant.title} />
        <S.RestaurantTags>
          {restaurant.highlight ? <Tag>Destaque da semana</Tag> : ''}
          <Tag>{restaurant.infos}</Tag>
        </S.RestaurantTags>
        <S.RestaurantInfos>
          <S.RestaurantName>
            <h2>{restaurant.title}</h2>
            <div>
              <p>{restaurant.rating}</p>
              <img src={star} alt="Rating" />
            </div>
          </S.RestaurantName>
          <p>{restaurant.description}</p>
          <Button type="link" to={restaurant.page}>
            Saiba mais
          </Button>
        </S.RestaurantInfos>
      </S.Card>
    ))}
  </>
)

export default Restaurant
