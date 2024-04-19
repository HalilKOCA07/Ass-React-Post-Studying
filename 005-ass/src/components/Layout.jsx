import React from "react";
import  Header  from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Input from "../pages/Input";
import Products from "../pages/Products";
import ApiProvider from "../context/ProductsApi";

const Layout = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default Layout;
