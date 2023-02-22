import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import Header from "../components/Header";
import { ProductProvider } from "../context/ProductContext";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <ProductProvider>
            <Header />
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/shop/:url" element={<ProductDetails />}></Route>
              </Routes>
            </Container>
          </ProductProvider>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

export default App;
