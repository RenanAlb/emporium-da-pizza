import styled from "styled-components"
import { CiShoppingCart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import { CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"

export const Fixed = styled.div`
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 40px;
  top: 0;
`

export const Navbar = styled.nav`
  li {
    display: inline-block;
  }
  li a {
    text-decoration: none;
    color: white;
    padding: 2px 20px;
    font-size: 1.25em;
    transition: 0.2s;
  }
  li a:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
    transition: 0.2s;
  }

  @media screen and (max-width: 970px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 70px;
  border-radius: 50%;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  div .nofit {
    position: absolute;
  }
`

export const Shop = styled(CiShoppingCart)`
  margin: 0px 10px;
`

export const Search = styled(CiSearch)`
  &:hover {
    cursor: pointer;
  }
`

export const Envelope = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const SimpleMenu = styled(CiMenuBurger)`
  display: none;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 970px) {
    display: block;
  }
`

export const Close = styled(TfiClose)`
  z-index: ${(props) => props.menu === 'true' ? '1' : '-1'};
  &:hover {
    cursor: pointer;
  }
`

export const Notif = styled.span`
  background-color: red;
  position: relative;
  font-size: 0.9em;
  left: -15px;
  top: -10px;
  color: white;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  padding: 8px;
`