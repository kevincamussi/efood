class Dish {
  id: number
  title: string
  description: string
  image: string
  price?: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    price: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.price = price
  }
}

export default Dish
