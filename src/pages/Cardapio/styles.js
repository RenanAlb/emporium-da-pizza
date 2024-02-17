import styled from "styled-components";
import imgcardapio from '../../assets/cardapio.jpg'

export const Body = styled.div`
  background-color: transparent;
`

export const Header = styled.header`
  background-image: url(${imgcardapio}), linear-gradient(to bottom, #515151, #515151);
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  background-position: center center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
  text-align: center;

  h1 {
    color: white;
    font-size: 4em;
    padding: 40px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 3.5em;
      padding: 0;
    }
  }
`

export const Main = styled.main`
  padding: 80px 5px;
`