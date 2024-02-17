// import PropTypes from 'prop-types'
import { useState } from "react"
import { Navbar, Logo, Fixed, Envelope, Icons, SimpleMenu, Shop, Close, Notif } from "./styles"
import MenuMobile from "../../MenuMobile"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import { useCarrinhoContext } from "../../contexts/CarrinhoContext"
import ShopPizza from "../../ShopPizza"

const Menu = () => {

  const { carrinho, setCarrinho } = useCarrinhoContext()

  const [ menu, setMenu ] = useState(false)
  const [ shop, setShop ] = useState(false)


  const atualizarMenu = () => {
    setMenu(!menu)
  }

  const atualizarShop = () => {
    setShop(!shop)
  }


  return(
      <Fixed>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Envelope>
          <Navbar>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
          </Navbar>
          <Icons>
            <Envelope>
              <Shop onClick={atualizarShop} color="white" size={25} />
              <Notif>{carrinho.length}</Notif>
            </Envelope>

            {
              menu === true ? <Close onClick={atualizarMenu} color="white" size={25} menu={menu.toString()} /> : <SimpleMenu onClick={atualizarMenu} color="white" size={25} />
            }
          </Icons>
          {
            menu === true ? <MenuMobile onClose={atualizarMenu} /> : <></>
          }
          {
            shop === true ? <ShopPizza carrinho={carrinho} onClose={atualizarShop} setCarrinho={setCarrinho} /> : <></>
          }
        </Envelope>
      </Fixed>
  )
}

// Menu.propTypes = {
//   carrinhoLength: PropTypes.number.isRequired
// }

export default Menu