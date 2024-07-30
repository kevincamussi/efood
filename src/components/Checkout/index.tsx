import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from '@mona-health/react-input-mask'

import { RootReducer } from '../../store'
import {
  closeCheckout,
  openCheckout,
  resetState
} from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api/api'
import { getTotalPrice, priceFormat } from '../../utils/utils'

import Button from '../Button'

import { Sidebar } from '../../components/Cart/styles'
import * as S from './styles'

const Checkout = () => {
  const [paymentPage, setPaymentPage] = useState(false)
  const [successPage, setSuccessPage] = useState(false)

  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const { isCheckoutPageOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const closeCheckoutpage = () => {
    dispatch(closeCheckout())
  }

  const openCheckoutPage = () => {
    dispatch(openCheckout())
    setPaymentPage(false)
    setSuccessPage(false)
  }

  const cleanInput = (value: string) => {
    return value.replace(/[^\d]/g, '')
  }

  const finishOrder = () => {
    dispatch(resetState())
    dispatch(closeCheckout())
    setPaymentPage(false)
    setSuccessPage(false)
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: () => {
      const cleanCep = cleanInput(form.values.cep)

      if (cleanCep.length !== 8) {
        form.setFieldError('cep', 'O CEP deve ter 8 dígitos')
        return
      }
      setPaymentPage(true)
    }
  })

  const cardForm = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      const cleanCardNumber = cleanInput(values.cardNumber)
      const cleanCardCode = cleanInput(values.cardCode)
      const cleanExpiresMonth = cleanInput(values.expiresMonth)
      const cleanExpiresYear = cleanInput(values.expiresYear)
      const cleanCep = cleanInput(form.values.cep)

      if (cleanCardNumber.length !== 16) {
        cardForm.setFieldError(
          'cardNumber',
          'O número do cartão deve ter 16 dígitos'
        )
        return
      }

      if (cleanCardCode.length !== 3) {
        cardForm.setFieldError('cardCode', 'O CVV deve ter 3 dígitos')
        return
      }

      if (cleanExpiresMonth.length !== 2) {
        cardForm.setFieldError(
          'expiresMonth',
          'O mês de vencimento deve ter 2 dígitos'
        )
        return
      }

      if (cleanExpiresYear.length !== 2) {
        cardForm.setFieldError(
          'expiresYear',
          'O ano de vencimento deve ter 2 dígitos'
        )
        return
      }

      setSuccessPage(true)

      purchase({
        delivery: {
          receiver: form.values.name,
          address: {
            description: form.values.address,
            city: form.values.city,
            zipCode: cleanCep,
            number: Number(form.values.houseNumber),
            complement: form.values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: cleanCardNumber,
            code: Number(cleanCardCode),
            expires: {
              month: Number(cleanExpiresMonth),
              year: Number(cleanExpiresYear)
            }
          }
        },
        products: items.map((item) => ({ id: item.id, price: item.preco }))
      })
    }
  })

  const getErrorMessage = (fieldName: keyof typeof form.values) => {
    return form.touched[fieldName] && form.errors[fieldName]
      ? form.errors[fieldName]
      : ''
  }

  const getErrorCardMessage = (fieldName: keyof typeof cardForm.values) => {
    return cardForm.touched[fieldName] && cardForm.errors[fieldName]
      ? cardForm.errors[fieldName]
      : ''
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
      <S.CheckoutContainer
        className={isCheckoutPageOpen && items.length > 0 ? 'visible' : ''}
      >
        <Sidebar>
          {!paymentPage && !isLoading && (
            <>
              <form onSubmit={form.handleSubmit}>
                <S.Checkout>
                  <h2>Entrega</h2>
                  <div>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('name') ? 'error' : ''}
                    />
                    <small>{getErrorMessage('name')}</small>
                  </div>
                  <div>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('address') ? 'error' : ''}
                    />
                    <small>{getErrorMessage('address')}</small>
                  </div>
                  <div>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorMessage('city') ? 'error' : ''}
                    />
                    <small>{getErrorMessage('city')}</small>
                  </div>
                  <div className="display-flex">
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        mask="99.999-999"
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorMessage('cep') ? 'error' : ''}
                      />
                      <small>{getErrorMessage('cep')}</small>
                    </div>
                    <div>
                      <label htmlFor="houseNumber">Número</label>
                      <input
                        type="number"
                        id="houseNumber"
                        name="houseNumber"
                        value={form.values.houseNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          getErrorMessage('houseNumber') ? 'error' : ''
                        }
                      />
                      <small>{getErrorMessage('houseNumber')}</small>
                    </div>
                  </div>
                  <div className="margin-bottom">
                    <label htmlFor="complement ">
                      Complemento ( opcional )
                    </label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </div>
                </S.Checkout>
                <Button type="submit">Continuar com o pagamento</Button>
              </form>
              <Button type="button" onClick={closeCheckoutpage}>
                Voltar para o carrinho
              </Button>
            </>
          )}
          {paymentPage && !successPage && (
            <>
              <form onSubmit={cardForm.handleSubmit}>
                <S.Checkout>
                  <h2>
                    Pagamento - Valor a pagar{' '}
                    {priceFormat(getTotalPrice(items))}
                  </h2>
                  <div>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={cardForm.values.cardOwner}
                      onChange={cardForm.handleChange}
                      onBlur={cardForm.handleBlur}
                      className={
                        getErrorCardMessage('cardOwner') ? 'error' : ''
                      }
                    />
                    <small>{getErrorCardMessage('cardOwner')}</small>
                  </div>
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999-9999-9999-9999"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardForm.values.cardNumber}
                      onChange={cardForm.handleChange}
                      onBlur={cardForm.handleBlur}
                      className={
                        getErrorCardMessage('cardNumber') ? 'error' : ''
                      }
                    />
                    <small>{getErrorCardMessage('cardNumber')}</small>
                  </div>
                  <div>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      mask="999"
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={cardForm.values.cardCode}
                      onChange={cardForm.handleChange}
                      onBlur={cardForm.handleBlur}
                      className={getErrorCardMessage('cardCode') ? 'error' : ''}
                    />
                    <small>{getErrorCardMessage('cardCode')}</small>
                  </div>
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={cardForm.values.expiresMonth}
                      onChange={cardForm.handleChange}
                      onBlur={cardForm.handleBlur}
                      className={
                        getErrorCardMessage('expiresMonth') ? 'error' : ''
                      }
                    />
                    <small>{getErrorCardMessage('expiresMonth')}</small>
                  </div>
                  <div>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="99"
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={cardForm.values.expiresYear}
                      onChange={cardForm.handleChange}
                      onBlur={cardForm.handleBlur}
                      className={
                        getErrorCardMessage('expiresYear') ? 'error' : ''
                      }
                    />
                    <small>{getErrorCardMessage('expiresYear')}</small>
                  </div>
                  <Button type="submit">Finalizar pagamento</Button>
                </S.Checkout>
              </form>
              <Button type="button" onClick={openCheckoutPage}>
                Voltar para a edição de Endereço
              </Button>
            </>
          )}
          {successPage && isSuccess && (
            <>
              <S.Checkout className="order-confirm">
                <h2>Pedido realizado - {data.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço fornecido
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button type="button" onClick={finishOrder}>
                  Concluir
                </Button>
              </S.Checkout>
            </>
          )}
        </Sidebar>
      </S.CheckoutContainer>
    </>
  )
}

export default Checkout
