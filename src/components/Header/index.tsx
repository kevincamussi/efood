import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="Logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderContainer>
)

export default Header
