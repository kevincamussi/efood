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

type UseGetRestaurantsListQueryType =
  typeof api.endpoints.getRestaurantsList.useQuery

type UseGetRestaurantQueryType = typeof api.endpoints.getRestaurant.useQuery

type UsePurchaseMutationType = typeof api.endpoints.purchase.useMutation

type PurchaseResponse = {
  orderId: string
}

type Product = {
  id: number
  price: number
}

type PurchasePaylod = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePaylod>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const useGetRestaurantsListQuery: UseGetRestaurantsListQueryType =
  api.endpoints.getRestaurantsList.useQuery

export const useGetRestaurantQuery: UseGetRestaurantQueryType =
  api.endpoints.getRestaurant.useQuery

export const usePurchaseMutation: UsePurchaseMutationType =
  api.endpoints.purchase.useMutation

export default api
