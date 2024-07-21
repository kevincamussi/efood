// import { useRestaurants } from '../../services/api/api' ==> react query

import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api/api'

import DishesList from '../DishesList'

import carregando from '../../assets/images/loading.gif'

import * as S from './styles'

const RestaurantProfile = () => {
  // const { data, isLoading, isError } = useRestaurants()  => react query
  // const { id } = useParams<{ id: string }>()    -> react query
  // const restaurantId = parseInt(id)
  // const restaurant = currentRestaurant.find((rest) => rest.id === restaurantId)

  const { id } = useParams()
  const { data: currentRestaurant, isError } = useGetRestaurantQuery(id!)

  if (isError) {
    return <h4>Erro ao carregar dados</h4>
  }

  return (
    <>
      {currentRestaurant ? (
        <div>
          <S.BannerImage image={currentRestaurant.capa}>
            <div className="container">
              <S.RestaurantName>
                <h2>{currentRestaurant.tipo}</h2>
                <h3>{currentRestaurant.titulo}</h3>
              </S.RestaurantName>
            </div>
          </S.BannerImage>
          <DishesList />
        </div>
      ) : (
        <div className="loading">
          <img src={carregando} alt="Carregando página" />
        </div>
      )}
    </>
  )
}

export default RestaurantProfile
