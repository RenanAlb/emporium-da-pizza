// CarrinhoContext.js
import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const CarrinhoContext = createContext()

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext)
};

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([])

  const atualizarCarrinho = (pizza) => {
    const novoCarrinho = [...carrinho]

    const pizzaNoCarrinho = novoCarrinho.find((item) => item.id === pizza.id)

    if (pizzaNoCarrinho) {
      pizzaNoCarrinho.pedido++
    } else {
      novoCarrinho.push({ ...pizza, pedido: 1 })
    }

    setCarrinho(novoCarrinho)

    console.log(novoCarrinho)
  }

  CarrinhoProvider.propTypes = {
    children: PropTypes.any,
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, atualizarCarrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}
