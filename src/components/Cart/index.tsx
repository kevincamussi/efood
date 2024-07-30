import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'
import { getTotalPrice, priceFormat } from '../../utils/utils'

import Checkout from '../Checkout'
import Button from '../Button'

import bin from '../../assets/images/bin.png'
import closeButton from '../../assets/images/close.png'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const openCheckoutPage = () => {
    dispatch(openCheckout())
    console.log()
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'visible' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <img src={closeButton} alt="Fechar carrinho" onClick={closeCart} />
          {items.length > 0 ? (
            <>
              {' '}
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <img
                    src={bin}
                    alt="Delete product from cart"
                    onClick={() => removeFromCart(item.id)}
                  />
                </S.CartItem>
              ))}
              <S.Prices>
                Total <span>{priceFormat(getTotalPrice(items))}</span>
              </S.Prices>
              <Button type="button" onClick={openCheckoutPage}>
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <p>
              Adicione pelo menos um produto no carrinho para continuar com a
              compra.
            </p>
          )}
          <Checkout />
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
