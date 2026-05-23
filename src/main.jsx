import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WatchlistProvider } from './context/watchlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <WatchlistProvider>
    <App />
  </WatchlistProvider>,
)
