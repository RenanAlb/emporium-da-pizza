import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5"

export const Container = styled.div``

export const Menu = styled.nav`
  background-color: black;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  animation: slower 0.55s ease-in-out;

  &.closed {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  @keyframes slower {
    0% {
      opacity: 0;
      transform: translate3d(600px, 0, 0);
      border-radius: 70%;
    }
    100% {
      opacity: 1;
      border-radius: 0%;
    }
  }

  ul li {
    margin: 25px 0px;
  }
  ul li a {
    text-decoration: none;
    color: white;
    font-size: 2.6em;
    padding: 10px;
    transition: 0.2s;
  }
  ul li a:hover {
    border-bottom: 1px solid white;
    cursor: pointer;
    transition: 0.2s;
  }
`

export const Close = styled(IoCloseOutline)`
  position: absolute;
  right: 20px;
  top: 20px;
`