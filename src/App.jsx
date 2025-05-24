import { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/Womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
