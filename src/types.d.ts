declare type Cardapio = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  cardapio: Cardapio[]
}

declare type DeliveryFormValues = {
  name: string
  address: string
  city: string
  cep: string
  houseNumber: string
  complement?: string
}
