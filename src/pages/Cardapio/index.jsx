import { Body, Main, Header } from "./styles"
import Produtos from "./Produtos"
import Footer from '../../components/Footer'

const Cardapio = () => {
  return(
    <Body>
      <Header>
        <h1>Cardápio</h1>
      </Header>
      <Main>
        <Produtos/>
      </Main>
      <Footer></Footer>
    </Body>
  )
}

export default Cardapio