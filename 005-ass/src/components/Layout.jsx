import React from "react";
import Header from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Input from "../pages/Input";
import Products from "../pages/Products";
import ApiProvider from "../context/ProductsApi";
import LoginProvider from "../context/LoginProvider";
import ProviteRouter from "./PrivateRouter";
import Login from "../pages/Login";

const Layout = () => {
  return (
    <ApiProvider>
      <LoginProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/input" element={<ProviteRouter />}> */}
              <Route path="input" element={<Input />} />
            {/* </Route> */}

            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </ApiProvider>
  );
};

export default Layout;
