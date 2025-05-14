import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import "./reset.css"
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css';
import "./styles/style.css"
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './service/store'


const client = new QueryClient()  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ColorSchemeScript />
        <MantineProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
