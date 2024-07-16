import { useRestaurants } from '../../api/api'

import RestaurantCard from '../RestaurantCard'

import { RestaurantsListContainer } from './styles'

import carregando from '../../assets/images/loading.gif'

const RestaurantsList = () => {
  const { data, isLoading, isError } = useRestaurants()

  if (!data || isLoading) {
    return (
      <div className="loading">
        <img src={carregando} alt="Carregando página" />
      </div>
    )
  }

  if (isError) {
    return <h4>Erro ao carregar dados</h4>
  }

  return (
    <RestaurantsListContainer>
      <div className="container">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </RestaurantsListContainer>
  )
}

export default RestaurantsList
