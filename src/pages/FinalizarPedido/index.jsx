import { Link } from "react-router-dom"
import { useCarrinhoContext } from "../../contexts/CarrinhoContext"
import { Main, Button, Container, Form, Label, Input } from "./styles"

const FinalizarPedido = () => {
  const { carrinho, setCarrinho } = useCarrinhoContext()

  const atualizarCarrinho = () => {
    setCarrinho([])
  }

  let precoTotal = 0
  for (let i = 0; i < carrinho.length; i++) {
    precoTotal += (carrinho[i].pedido * carrinho[i].custo)
  }

  return(
    <Main>
      <h3>Preço total: R$ {precoTotal.toFixed(2).replace('.',',')}</h3>
      <Form action="#">
        <Container>
          <Label htmlFor="nome">Nome</Label>
          <Input type="text" id="nome" placeholder="Digite seu nome completo" required />
        </Container>
        <Container>
          <Label htmlFor="endereco">Endereço</Label>
          <Input type="text" id="endereco" placeholder="Digite seu endereço" required />
        </Container>
        <Container>
          <Label htmlFor="ref">Ponto de referência</Label>
          <Input type="text" id="ref" placeholder="Digite seu ponto de referência" required />
        </Container>
        <Container>
          <Label htmlFor="pagamento">Pagamento</Label>
          <select id="pagamento">
            <option value="PIX">PIX</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão">Cartão</option>
          </select>
        </Container>
        <Container>
          <textarea cols="30" rows="10" placeholder="Adicione ingredientes, acompanhamentos, bebidas e mais"></textarea>
        </Container>
        <Link to="/" onClick={atualizarCarrinho}><Button type="submit">Finalizar pedido</Button></Link>
      </Form>
    </Main>
  )
}

export default FinalizarPedido