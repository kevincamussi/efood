// import { useRestaurants } from '../../services/api/api'  =--> react query
// import { useGetRestaurantsListQuery } from '../../services/api/api'

import RestaurantCard from '../RestaurantCard'

import { RestaurantsListContainer } from './styles'

import Loader from '../Loader'

import { useGetRestaurantsListQuery } from '../../services/api/api'

const RestaurantsList = () => {
  // const { data, isLoading, isError } = useRestaurants()  -> react query

  const { data: restaurants, isError, isLoading } = useGetRestaurantsListQuery()

  if (isError) {
    return (
      <div className="errorDiv">
        <h4>Erro ao carregar dados</h4>
      </div>
    )
  }

  return (
    <>
      {restaurants && !isLoading ? (
        <RestaurantsListContainer>
          <div className="container">
            {restaurants.map((restaurant: Restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </RestaurantsListContainer>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default RestaurantsList
