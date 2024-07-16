class Cardapio {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: string
  porcao: string

  constructor(
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    preco: string,
    porcao: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.preco = preco
    this.porcao = porcao
  }
}

export default Cardapio
