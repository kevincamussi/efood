import { FooterStyle, SocialMediaContainer } from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/fb.png'
import instagram from '../../assets/images/ig.png'
import twitter from '../../assets/images/tw.png'

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="Logo" />
    <SocialMediaContainer>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </SocialMediaContainer>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterStyle>
)

export default Footer
