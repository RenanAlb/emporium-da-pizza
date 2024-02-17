import { useCarrinhoContext } from '../../../contexts/CarrinhoContext'
import { Container, Produto, Image, Text, Button } from './styles'
import { useState } from 'react'

import img from '../../../assets/pizza1.jpg'
import img1 from '../../../assets/pizza2.jpg'
import img2 from '../../../assets/pizza3.jpg'
import img3 from '../../../assets/pizza4.jpg'
import img4 from '../../../assets/pizza5.png'
import img5 from '../../../assets/pizza6.jpg'
import img6 from '../../../assets/pizza7.jpg'
import img7 from '../../../assets/pizza8.jpg'
import img8 from '../../../assets/pizza9.jpg'
import img9 from '../../../assets/pizza10.jpg'
import img10 from '../../../assets/pizza11.jpg'
import img11 from '../../../assets/pizza12.png'
import img12 from '../../../assets/pizza13.jpg'
import img13 from '../../../assets/pizza14.jpg'
import img14 from '../../../assets/pizza15.jpg'

const pizzas = [
  {
    img: img,
    nome: 'Pizza de Frango com Catupiry',
    custo: 50,
    id: 0,
    pedido: 0
  },
  {
    img: img1,
    nome: 'Pizza de Calabresa',
    custo: 45,
    id: 1,
    pedido: 0
  },
  {
    img: img2,
    nome: 'Pizza Portuguesa',
    custo: 45,
    id: 2,
    pedido: 0
  },
  {
    img: img3,
    nome: 'Pizza de Bacon',
    custo: 52,
    id: 3,
    pedido: 0
  },
  {
    img: img4,
    nome: 'Pizza Marguerita',
    custo: 50,
    id: 4,
    pedido: 0
  },
  {
    img: img5,
    nome: 'Pizza de Queijo',
    custo: 45,
    id: 5,
    pedido: 0
  },
  {
    img: img6,
    nome: 'Pizza de Chocolate com Marshmallow',
    custo: 55,
    id: 6,
    pedido: 0
  },
  {
    img: img7,
    nome: 'Pizza de Banana com Canela',
    custo: 55,
    id: 7,
    pedido: 0
  },
  {
    img: img8,
    nome: 'Pizza Califórnia',
    custo: 55,
    id: 8,
    pedido: 0
  },
  {
    img: img9,
    nome: 'Pizza de Chocolate com Morango',
    custo: 60,
    id: 9,
    pedido: 0
  },
  {
    img: img10,
    nome: 'Pizza de Chocolate com Bombom',
    custo: 60,
    id: 10,
    pedido: 0
  },
  {
    img: img11,
    nome: 'Pizza de Strogonoff',
    custo: 55,
    id: 11,
    pedido: 0
  },
  {
    img: img12,
    nome: 'Pizza de Prestígio',
    custo: 60,
    id: 12,
    pedido: 0
  },
  {
    img: img13,
    nome: 'Pizza Gorgonzola',
    custo: 50,
    id: 13,
    pedido: 0
  },
  {
    img: img14,
    nome: 'Pizza de Camarão',
    custo: 60,
    id: 14,
    pedido: 0
  },
]


const Produtos = () => {

  const [ mostrar, setMostrar ] = useState(false)
  const [ pizza, setPizza ] = useState('')

  const { atualizarCarrinho } = useCarrinhoContext()

  const mostrarPizza = () => {
    setMostrar(!mostrar)
  }

  console.log(pizza)

  return (
    <Container>
      {
        pizzas.map((pizza, key) => (
          <Produto key={key} onClick={() => {
            mostrarPizza()
            setPizza(pizza)
          }}>
            <Image img={pizza.img}></Image>
            <Text>
              <h1>{pizza.nome}</h1>
              <p>R$ {pizza.custo.toFixed(2).replace('.',',')}</p>
              <Button onClick={() => atualizarCarrinho(pizza)}>Adicionar pedido</Button>
            </Text>
          </Produto>
        ))
      }
    </Container>
  )
}

export default Produtos