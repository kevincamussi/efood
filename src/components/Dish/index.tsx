import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api/api'
import { open, add } from '../../store/reducers/cart'

import { priceFormat } from '../../utils/utils'

import Cardapio from '../../Interfaces/dishes'

import Button from '../Button'

import carregando from '../../assets/images/loading.gif'
import close from '../../assets/images/close.png'

import * as S from './styles'

const Dish = () => {
  // const restaurantId = parseInt(id)
  // const dish = data.find((rest) => rest.id === restaurantId)  --> react query
  // const { id } = useParams<{ id: string }>()   --> react query

  const [cardapio, setCardapio] = useState<Cardapio | undefined>(undefined)
  const [isVisible, setIsVisible] = useState(false)

  const { id } = useParams()
  const { data: restaurant, isError } = useGetRestaurantQuery(id!)

  const dispatch = useDispatch()

  const addToCart = (cardapio: Cardapio) => {
    dispatch(add(cardapio))
    dispatch(open())
  }

  if (isError) {
    return <h4>Erro ao carregar dados</h4>
  }

  return (
    <>
      {restaurant ? (
        restaurant.cardapio.map((prato: Cardapio) => (
          <div key={prato.id}>
            <S.DishCard>
              <img src={prato.foto} alt="prato" />
              <h2>{prato.nome}</h2>
              <p>{prato.descricao}</p>
              <Button
                type="button"
                onClick={() => {
                  setCardapio(prato), setIsVisible(true)
                }}
              >
                Adicionar ao carrinho
              </Button>
            </S.DishCard>
            {cardapio && (
              <S.Modal className={isVisible ? 'visible' : ''}>
                <S.ModalContent className="container">
                  <img src={cardapio.foto} alt="Imagem do prato" />
                  <img
                    src={close}
                    alt="Botão fechar"
                    onClick={() => setIsVisible(false)}
                  />
                  <div>
                    <header>
                      <h2>{cardapio.nome}</h2>
                    </header>
                    <p>
                      {cardapio.descricao}
                      <br />
                      <br />
                      Serve: {cardapio.porcao}
                    </p>
                    <div>
                      <Button type="link" onClick={() => addToCart(cardapio)}>
                        Adicionar ao carrinho -
                        <span>{priceFormat(cardapio.preco)}</span>
                      </Button>
                    </div>
                  </div>
                </S.ModalContent>
                <div
                  className="overlay"
                  onClick={() => setIsVisible(false)}
                ></div>
              </S.Modal>
            )}
          </div>
        ))
      ) : (
        <div className="loading">
          <img src={carregando} alt="Carregando página" />
        </div>
      )}
    </>
  )
}

export default Dish
