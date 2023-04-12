import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/update/AddBlog";
import EditBlog from "./pages/admin/update/EditBlog";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ProductProvider } from "./context/ProductContext";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/add" element={<AddBlog />}></Route>
          <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
        </Routes>
      </Container>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
