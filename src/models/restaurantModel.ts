import Cardapio from './dishModel'

class Restaurant {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  cardapio: Cardapio[]
  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    avaliacao: number,
    descricao: string,
    capa: string,
    tipo: string,
    cardapio: Cardapio[]
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.tipo = tipo
    this.cardapio = cardapio
  }
}

export default Restaurant
