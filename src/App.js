import React, { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import './styles.css'

function App() {
  
  const [cart ,setCart] = useState(5)
  return (
    <div className="container">
      <Header cart={cart} setCart={setCart} />
      <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart setCart={setCart}/>} />

        </Routes>
    </div>
  )
}

export default App
