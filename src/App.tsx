import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import { GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
