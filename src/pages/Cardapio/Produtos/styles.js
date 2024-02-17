import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 500px) {
    justify-content: space-around;
  }
`

export const Produto = styled.section`
  width: 33%;
  transition: 0.2s;
  margin: 10px 0px 0px 0px ;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    width: 49.5%;
  }

  @media screen and (max-width: 500px) {
    width: 48%;
  }
`


export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 450px;
  transition: 0.2s;

  @media screen and (max-width: 1000px) {
    height: 300px;
  }

  @media screen and (max-width: 660px) {
    height: 230px;
  }

  @media screen and (max-width: 500px) {
    height: 160px;
  }
`

export const Text = styled.div`
  padding: 36px 10px;
  height: 200px;

  p {
    margin: 10px 0px;
    font-size: 1.4em;
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 1.2em;
    }

    h1 {
      font-size: 1.3em;
    }
  }
`

export const Button = styled.button`
  background-color: #96040B;
  color: white;
  padding: 10px;
  border: none;
  transition: 0.1s;
  z-index: 1;

  &:hover {
    background-color: black;
    transition: 0.1s;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    padding: 8px;
    font-size: 0.85em;
  }
`