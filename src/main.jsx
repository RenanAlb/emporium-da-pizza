import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from './ScrollToTop'
import './global.css'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Sobre from './pages/Sobre'
import FinalizarPedido from './pages/FinalizarPedido'
import { CarrinhoProvider } from './contexts/CarrinhoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarrinhoProvider>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route path="/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="/cardapio" element={<Cardapio/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </CarrinhoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
