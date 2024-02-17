import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5"

export const Main = styled.main`
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 60px 10px;
  overflow-y: auto;
  text-align: center;
  animation: slow 0.55s ease-in-out;

  h1 {
    padding: 20px;
  }

  @keyframes slow {
    0% {
      opacity: 0;
      transform: translate3d(600px, 0, 0);
    }
    100% {
      opacity: 1;
    }
  }
`

export const Produto = styled.section`
  display: flex;
  max-width: 900px;
  background-color: #F5F9F8;
  margin: 10px auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 70%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 350px;
  transition: 0.2s;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 300px;
  }
`

export const Text = styled.section`
  padding: 20px;
  text-align: start;

  p {
    font-size: 1.2em;
    line-height: 2.2em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }

  @media screen and (max-width: 900px) {
    padding: 30px 10px;
  }
`

export const Close = styled(IoCloseOutline)`
  &:hover {
    cursor: pointer;
  }

  position: absolute;
  top: 30px;
  right: 30px;
`

export const Button = styled.button`
  background-color: #96040B;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  transition: 0.1s;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 0.1s;
  }
`

export const Increment = styled.button`
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  border: none;
  background-color: transparent;
  color: black;

  &:hover {
    cursor: pointer;
  }
`

export const Decrement = styled.button`
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  border: none;
  background-color: transparent;
  color: black;

  &:hover {
    cursor: pointer;
  }
`