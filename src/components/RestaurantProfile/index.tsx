// import { useRestaurants } from '../../services/api/api' ==> react query

import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api/api'

import Loader from '../Loader'
import DishesList from '../DishesList'

import * as S from './styles'

const RestaurantProfile = () => {
  // const { data, isLoading, isError } = useRestaurants()  => react query
  // const { id } = useParams<{ id: string }>()    -> react query
  // const restaurantId = parseInt(id)
  // const restaurant = currentRestaurant.find((rest) => rest.id === restaurantId)

  const { id } = useParams()
  const {
    data: currentRestaurant,
    isError,
    isLoading
  } = useGetRestaurantQuery(id!)

  if (isError) {
    return (
      <div className="errorDiv">
        <h4>Erro ao carregar dados</h4>
      </div>
    )
  }

  return (
    <>
      {currentRestaurant && !isLoading ? (
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
        <Loader />
      )}
    </>
  )
}

export default RestaurantProfile
