import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// import { QueryClientProvider } from '@tanstack/react-query'    --> react-query
// import { queryClient } from './services/api/api'    --> react-query

import { store } from './store'
import AppRoutes from './routes'

import { GlobalStyle } from './styles'

import Cart from './components/Cart'

function App() {
  return (
    // <QueryClientProvider client={queryClient}>     --> react-query
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Cart />
      </BrowserRouter>
    </Provider>
    // </QueryClientProvider>    --> react-query
  )
}

export default App
