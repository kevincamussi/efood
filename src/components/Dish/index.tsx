import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useRestaurants } from '../../api/api'

import Cardapio from '../../models/dishModel'

import Button from '../Button'

import carregando from '../../assets/images/loading.gif'
import close from '../../assets/images/close.png'

import * as S from './styles'

const Dish = () => {
  const [cardapio, setCardapio] = useState<Cardapio>()
  const [isVisible, setIsVisible] = useState(false)

  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useRestaurants()

  if (!data || !id || isLoading) {
    return (
      <div className="loading">
        <img src={carregando} alt="Carregando página" />
      </div>
    )
  }

  if (isError) {
    return <h4>Erro ao carregar dados</h4>
  }

  const restaurantId = parseInt(id)
  const dish = data.find((rest) => rest.id === restaurantId)

  return (
    <>
      {!dish ? (
        <div className="loading">
          <img src={carregando} alt="Carregando página" />
        </div>
      ) : (
        dish.cardapio.map((prato: Cardapio) => (
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
                      <Button type="link">
                        Adicionar ao carrinho - R${cardapio.preco}
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
      )}
    </>
  )
}

export default Dish
