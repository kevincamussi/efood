import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api/api'
import { open, add, CartState } from '../../store/reducers/cart'

import { priceFormat } from '../../utils/utils'

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
  const [isDuplicate, setIsDuplicate] = useState(false)

  const { id } = useParams()
  const { data: restaurant, isError } = useGetRestaurantQuery(id!)

  const dispatch = useDispatch()

  const cart = useSelector((state: { cart: CartState }) => state.cart.items)

  const addToCart = (cardapio: Cardapio) => {
    const isInCart = cart.some((item: Cardapio) => item.id === cardapio.id)

    if (!isInCart) {
      dispatch(add(cardapio))
      dispatch(open())
      setIsDuplicate(false)
    } else {
      setIsDuplicate(true)
    }
  }

  const hide = () => {
    setIsDuplicate(false)
    setIsVisible(false)
  }

  if (isError) {
    return (
      <div className="errorDiv">
        <h4>Erro ao carregar dados</h4>
      </div>
    )
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
                  <img src={close} alt="Botão fechar" onClick={hide} />
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
                    {!isDuplicate ? (
                      <div>
                        <Button type="link" onClick={() => addToCart(cardapio)}>
                          Adicionar ao carrinho -
                          <span>{priceFormat(cardapio.preco)}</span>
                        </Button>
                      </div>
                    ) : (
                      <div className="duplicate-in-cart">
                        <Button
                          type="link"
                          onClick={() => setIsDuplicate(false)}
                        >
                          O produto já está no carrinho
                        </Button>
                      </div>
                    )}
                  </div>
                </S.ModalContent>
                <div className="overlay" onClick={hide}></div>
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
