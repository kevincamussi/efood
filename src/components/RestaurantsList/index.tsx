// import { useRestaurants } from '../../services/api/api'  =--> react query
// import { useGetRestaurantsListQuery } from '../../services/api/api'

import RestaurantCard from '../RestaurantCard'

import { RestaurantsListContainer } from './styles'

import carregando from '../../assets/images/loading.gif'
import Restaurant from '../../Interfaces/restaurant'

import { useGetRestaurantsListQuery } from '../../services/api/api'
const RestaurantsList = () => {
  // const { data, isLoading, isError } = useRestaurants()  -> react query

  const { data: restaurants, isError } = useGetRestaurantsListQuery()

  if (isError) {
    return <h4>Erro ao carregar dados</h4>
  }

  return (
    <>
      {restaurants ? (
        <RestaurantsListContainer>
          <div className="container">
            {restaurants.map((restaurant: Restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </RestaurantsListContainer>
      ) : (
        <div className="loading">
          <img src={carregando} alt="Carregando página" />
        </div>
      )}
    </>
  )
}

export default RestaurantsList
