import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CssBaseline/>
      <App/>
    </StrictMode>
  </BrowserRouter>
)
