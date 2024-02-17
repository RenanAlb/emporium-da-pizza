import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from './styles'

const MenuMobile = ({ onClose }) => {

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <Menu>
      <ul>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/cardapio" onClick={handleLinkClick}>Cardápio</Link></li>
        <li><Link to="/sobre" onClick={handleLinkClick}>Sobre nós</Link></li>
      </ul>
    </Menu>
  )
}

MenuMobile.propTypes = {
  onClose: PropTypes.any.isRequired
}

export default MenuMobile