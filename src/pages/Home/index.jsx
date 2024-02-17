import { Link } from "react-router-dom"
import { Main, SectionOne, ContainerText, Img, Text, Title, BigText, Button, Header, SmallText ,TextHeader, SectionTwo, TextTwo, TitleTwo, Image, Txt } from "./styles"
import Footer from "../../components/Footer"

const Home = () => {
  return(
    <>
      <Header>
        <TextHeader>
          <BigText>Emporium da Pizza</BigText>
          <SmallText>Encontre as melhores pizzas da região aqui</SmallText>
          <Link to="/cardapio"><Button>VER CARDÁPIO</Button></Link>
        </TextHeader>
      </Header>
      <Main>
        <SectionOne>
            <ContainerText>
              <Title>Descubra uma experiência única em sabores e tradições.</Title>
              <Text>No Emporium da Pizza, acreditamos que cada fatia conta uma história, e é por isso que nos dedicamos a criar as pizzas mais deliciosas e autênticas para satisfazer o seu paladar. Somos uma pizzaria que vai além das expectativas, oferecendo uma variedade de opções que vão desde as clássicas até as mais inovadoras combinações de sabores.</Text>
            </ContainerText>
            <Img></Img>
          </SectionOne>
          <SectionTwo>
            <TitleTwo>Ambiente Aconchegante e Presencial.</TitleTwo>
            <TextTwo>Para aqueles que desejam vivenciar a atmosfera única de uma pizzaria tradicional, convidamos você a visitar o nosso acolhedor espaço. Com um ambiente agradável, atendimento caloroso e o aroma irresistível das pizzas assando no forno, o Emporium da Pizza proporciona uma experiência que vai além da simples refeição.</TextTwo>
            <Image />
          </SectionTwo>
          <Txt>
          Faça parte da nossa comunidade de amantes de pizza! Faça seu pedido online hoje e descubra por que a Emporium da Pizza é a escolha preferida para quem busca qualidade, sabor e comodidade.
          </Txt>
      </Main>
      <Footer />
    </>
  )
}

export default Home