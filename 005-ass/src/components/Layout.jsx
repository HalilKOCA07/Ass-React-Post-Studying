import React from 'react'
import {Header} from './header/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Input from '../pages/Input'
import Products from '../pages/Products'

const Layout = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/products" element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Layout
