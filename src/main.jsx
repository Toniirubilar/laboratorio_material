import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Principal from './Principal.jsx'
import Cards from './components/Cards.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <Cards />
  </React.StrictMode>,
)