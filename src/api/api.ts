import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Restaurant from '../models/restaurantModel'

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

  const res = await axios.get(API_URL)
  return res.data
}

export const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurantList'],
    queryFn: fetchRestaurants
  })
}

export const queryClient = new QueryClient()
