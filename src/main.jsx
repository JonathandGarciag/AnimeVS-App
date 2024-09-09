import { React } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { AnimeApp } from './components/AnimeApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeApp />
  </StrictMode>,
)
