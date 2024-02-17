import { Container, Main, Image, Section, Text, Img } from "./styles"
import sobre2 from '../../assets/sobre2.jpg'
import sobre3 from '../../assets/sobre3.jpg'
import Footer from '../../components/Footer'

const Sobre = () => {
  return(
    <Container>
      <Image>
        <h1>Sobre nós</h1>
      </Image>
      <Main>
        <Section>
          <Text>
            Na Emporium da Pizza, estamos dedicados a oferecer uma experiência gastronômica excepcional diretamente à sua porta. Com um cardápio diversificado, ingredientes frescos e a conveniência das vendas online delivery, elevamos a arte de saborear uma boa pizza para um novo patamar.
          </Text>
        </Section>
        <Section>
          <Img img={sobre2} />
          <Text>
            Facilitamos para você satisfazer seus desejos de pizza favoritos. Nosso sistema de vendas online delivery oferece conveniência na ponta dos seus dedos. Basta navegar pelo nosso cardápio, fazer seu pedido e aguardar enquanto preparamos sua refeição com carinho. Em pouco tempo, nossa equipe ágil entregará a empolgação de sabores diretamente à sua porta.
          </Text>
        </Section>
        <Section>
          <Img img={sobre3} />
          <Text>
            Acreditamos que a qualidade começa com ingredientes frescos e selecionados com cuidado. Nossas pizzas são preparadas diariamente, usando os melhores queijos, molhos e vegetais para garantir que cada mordida seja uma experiência memorável.
          </Text>
        </Section>
      </Main>
      <Footer/>
    </Container>
  )
}

export default Sobre