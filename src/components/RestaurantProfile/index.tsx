import { useParams } from 'react-router-dom'
import { useRestaurants } from '../../api/api'

import DishesList from '../DishesList'

import carregando from '../../assets/images/loading.gif'

import * as S from './styles'

const RestaurantProfile = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useRestaurants()

  if (!data || !id || isLoading) {
    return (
      <div className="loading">
        <img src={carregando} alt="Carregando página" />
      </div>
    )
  }

  const restaurantId = parseInt(id)
  const restaurant = data.find((rest) => rest.id === restaurantId)

  if (isError || !restaurant) {
    return <h4>Erro ao carregar dados</h4>
  }
  return (
    <>
      <div>
        <S.BannerImage image={restaurant.capa}>
          <div className="container">
            <S.RestaurantName>
              <h2>{restaurant.tipo}</h2>
              <h3>{restaurant.titulo}</h3>
            </S.RestaurantName>
          </div>
        </S.BannerImage>
        <DishesList />
      </div>
    </>
  )
}

export default RestaurantProfile
