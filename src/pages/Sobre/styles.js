import styled from "styled-components";
import sobre from '../../assets/sobre.jpg'


export const Container = styled.section`
  width: 100%;
`

export const Main = styled.main`
  padding: 80px 0px 0px 0px;
`

export const Image = styled.div`
  background-image: url(${sobre}), linear-gradient(to bottom, #3c3c3c, gray);
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;

  h1 {
    color: white;
    font-size: 4em;
  }
`

export const Section = styled.section`
  width: 100%;
  margin: auto;

`

export const Text = styled.div`
  font-size: 1.9em;
  line-height: 1.9em;
  padding: 50px 20px;

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`

export const Img = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  margin-bottom: 60px;
  width: 100%;
  height: 600px;
`