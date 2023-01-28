import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import Products from '../pages/Products'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
           <div className='container'>
           <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<NotFoundPage />}>b</Route>
            </Routes>
           </div>
            <Footer />
      </BrowserRouter>
    )
  }
}

export default AppRouter