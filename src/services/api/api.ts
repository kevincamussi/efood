// import { QueryClient, useQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import Restaurant from '../../Interfaces/restaurant'

// const fetchRestaurants = async (): Promise<Restaurant[]> => {
//   const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

//   const res = await axios.get(API_URL)
//   return res.data
// }

// export const useRestaurants = () => {
//   return useQuery({
//     queryKey: ['restaurantList'],
//     queryFn: fetchRestaurants
//   })
// }

// export const queryClient = new QueryClient()    -> react query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../../Interfaces/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsListQuery, useGetRestaurantQuery } = api

export default api
