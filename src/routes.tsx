import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<RestaurantPage />} />
  </Routes>
)

export default AppRoutes
