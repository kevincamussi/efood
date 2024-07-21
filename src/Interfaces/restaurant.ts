import Cardapio from './dishes'

export default interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  cardapio: Cardapio[]
}
