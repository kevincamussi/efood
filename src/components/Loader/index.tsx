import { MoonLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <MoonLoader color={colors.pink} />
  </Container>
)

export default Loader
