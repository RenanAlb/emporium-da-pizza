import styled from "styled-components";
import img from '../../assets/img1.jpg'
import imgG from '../../assets/global.jpg'
import brasa from '../../assets/brasa.jpg'

export const Main = styled.main`
  padding: 50px 0px;
`

export const Header = styled.header`
  background-image: url(${imgG});
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

export const TextHeader = styled.section`
  width: 100%;
  padding: 270px 40px 0px 40px;
`
export const BigText = styled.h1`
  color: white;
  font-size: 6em;
  font-weight: 100;

  @media screen and (max-width: 980px) {
    font-size: 4em;
  }
  @media screen and (max-width: 650px) {
    font-size: 3em;
  }
`

export const SmallText = styled.p`
  color: white;
  font-size: 1.5em;
  @media screen and (max-width: 650px) {
    font-size: 1.3em;
  }
`

export const Button = styled.button`
  background-color: #96040B;
  padding: 15px;
  color: white;
  margin-top: 20px;
  border: none;
  font-size: 1.2em;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 0.2s;
  }

  @media screen and (max-width: 650px) {
    font-size: 0.95em;
  }
`


export const SectionOne = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 30px;
  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
  }
`

export const ContainerText = styled.section`
  padding: 30px;
  width: 40%;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 90px;
  @media screen and (max-width: 1350px) {
    font-size: 2em;
  }
`

export const Text = styled.p`
  font-size: 1.5em;
  line-height: 1.9em;
  @media screen and (max-width: 1350px) {
    font-size: 1.4em;
  }
`

export const Img = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  width: 50%;
  height: 800px;
  margin-top: 60px;

  @media screen and (max-width: 980px) {
    width: 100%;
    height: 400px;
  }
`

export const SectionTwo = styled.section`
  margin-top: 100px;
  text-align: center;
`

export const TitleTwo = styled.h1`
  font-size: 2.5em;
  margin: 70px 0px;
  text-align: center;
  @media screen and (max-width: 1350px) {
    font-size: 2em;
  }
`

export const TextTwo = styled.p`
  font-size: 1.5em;
  line-height: 1.9em;
  padding: 20px;

  @media screen and (max-width: 1350px) {
    font-size: 1.4em;
  }
`

export const Image = styled.div`
  background-image: url(${brasa});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 600px;
  margin-top: 60px;
`

export const Txt = styled.div`
  padding: 90px 20px;
  font-size: 1.8em;
  text-align: center;
  line-height: 1.7em;
`
