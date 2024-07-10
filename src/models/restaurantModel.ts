import Dish from './dishModel'

class Restaurant {
  id: number
  title: string
  highlight: boolean
  rating: number
  description: string
  image: string
  infos: string
  page: string
  dishes: Dish[]
  constructor(
    id: number,
    title: string,
    highlight: boolean,
    rating: number,
    description: string,
    image: string,
    infos: string,
    page: string,
    dishes: Dish[]
  ) {
    this.id = id
    this.title = title
    this.highlight = highlight
    this.rating = rating
    this.description = description
    this.image = image
    this.infos = infos
    this.page = page
    this.dishes = dishes
  }
}

export default Restaurant
