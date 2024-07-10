import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterStyle = styled.footer`
  background-color: ${colors.cream};
  text-align: center;
  padding: 40px 0;

  img {
    width: 128px;
    margin-bottom: 32px;
  }

  p {
    color: ${colors.pink};
    font-size: 10px;
    max-width: 480px;
    margin: 0 auto;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 88px;
  margin: 0 auto;

  img {
    width: 24px;
    height: 24px;
  }
`
