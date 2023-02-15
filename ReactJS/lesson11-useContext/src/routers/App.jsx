import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { MovieProvider } from "../context/MovieContext";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
    <MovieProvider>
      <Header />
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:url" element={<MovieDetails />}></Route>
          </Routes>
        </Container>
        </MovieProvider>
    </BrowserRouter>
  );
};

export default App;
