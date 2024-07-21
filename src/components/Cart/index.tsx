import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { priceFormat } from '../../utils/utils'

import bin from '../../assets/images/bin.png'
import Button from '../Button'
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

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'visible' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <img src={closeButton} alt="Fechar carrinho" onClick={closeCart} />
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
            Total <span>{priceFormat(getTotalPrice())}</span>
          </S.Prices>
          <Button type="link">Continuar com a entrega</Button>
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
