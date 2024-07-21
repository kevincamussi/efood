import Restaurant from '../../Interfaces/restaurant'

import Button from '../Button'

import * as S from './styles'

import star from '../../assets/images/star.png'
import Tag from '../Tag'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <>
      <S.Card key={restaurant.id}>
        <img src={restaurant.capa} alt={restaurant.titulo} />
        <S.RestaurantTags>
          {restaurant.destacado ? <Tag>Destaque da semana</Tag> : ''}
          <Tag>{restaurant.tipo}</Tag>
        </S.RestaurantTags>
        <S.RestaurantInfos>
          <S.RestaurantName>
            <h2>{restaurant.titulo}</h2>
            <div>
              <p>{restaurant.avaliacao}</p>
              <img src={star} alt="Rating" />
            </div>
          </S.RestaurantName>
          <p>{restaurant.descricao}</p>
          <Button type="link" to={`/${restaurant.id}`}>
            Saiba mais
          </Button>
        </S.RestaurantInfos>
      </S.Card>
    </>
  )
}

export default RestaurantCard
