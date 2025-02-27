import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
React Bootstrap Configuration
*/ 
import 'bootstrap/dist/css/bootstrap.css'  // Only import Bootstrap CSS
import { AuthContextProvider } from './store/auth-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </StrictMode>
)
