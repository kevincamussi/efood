import { Route, Routes } from 'react-router-dom'
import restaurants from './api/api'

import Home from './pages/Home'

import RestaurantPage from './pages/RestaurantPage'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {restaurants.map((restaurant) => (
      <Route
        key={restaurant.id}
        path={restaurant.page}
        element={<RestaurantPage restaurant={restaurant} />}
      />
    ))}
  </Routes>
)

export default AppRoutes
