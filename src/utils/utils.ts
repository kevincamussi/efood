export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

type Item = {
  preco: number
}

export const getTotalPrice = (items: Item[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}
