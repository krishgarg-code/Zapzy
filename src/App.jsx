import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory category="Mens" />} />
          <Route path="/Womens" element={<ShopCategory category="Womens" />} />
          <Route path="/Kids" element={<ShopCategory category="Kids" />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
