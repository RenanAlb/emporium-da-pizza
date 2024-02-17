import { useState } from 'react'
import PropTypes from 'prop-types'
import { Main, Produto, Image, Close, Text, Button, Increment, Decrement } from "./styles"
import { Link } from 'react-router-dom'
// import FinalizarPedido from './FinalizarPedido'

const ShopPizza = ({ carrinho, onClose, setCarrinho }) => {

  const [ finalizar, setFinalizar ] = useState(false)

  const atualizarShop = () => {
    onClose()
  }

  const finalizarPedido = () => {
    setFinalizar(!finalizar)
    atualizarShop()
  }

  const removerPedido = (pizza) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== pizza.id)
    setCarrinho(novoCarrinho)
  }

  const increment = (pizza) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === pizza.id ? { ...item, pedido: item.pedido + 1 } : item
    );
    setCarrinho(novoCarrinho);
  }

  const decrement = (pizza) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === pizza.id && item.pedido > 1 ? { ...item, pedido: item.pedido - 1 } : item
    );
    setCarrinho(novoCarrinho);
  }

  return(
    <Main>
      <h1>Carrinho</h1>
      <Close color='black' size={30} onClick={atualizarShop} />
      {
        carrinho.map((pizza, key) => (
          <Produto key={key}>
            <Image img={pizza.img} />
            <Text>
              <p>{pizza.nome}</p>
              <p>Preço (unidade): {pizza.custo.toFixed(2).replace('.',',')}</p>
              <p>Preço (total): R$ {(pizza.custo * pizza.pedido).toFixed(2).replace('.',',')}</p>
              <p>Quantidade: <Decrement onClick={() => decrement(pizza)}>-</Decrement> {pizza.pedido} <Increment onClick={() => increment(pizza)} >+</Increment></p>
              <Button onClick={() => removerPedido(pizza)}>Remover pedido</Button>
            </Text>
          </Produto>
        ))
      }
      {
        carrinho.length <= 0 ? <h3>Carrinho vazio</h3> : <Link to="/finalizar-pedido"><Button onClick={finalizarPedido}>Fazer pedido agora</Button></Link>
      }
    </Main>
  )
}

ShopPizza.propTypes = {
  carrinho: PropTypes.array.isRequired,
  onClose: PropTypes.func,
  setCarrinho: PropTypes.func
}


export default ShopPizza