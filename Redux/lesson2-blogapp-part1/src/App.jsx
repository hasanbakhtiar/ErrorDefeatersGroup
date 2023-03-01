import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Blogs from './pages/Blogs'
import Home from './pages/Home'

const App = () => {
    return (
        <BrowserRouter>
        <Header />
         <Container>
         <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
            </Routes>
         </Container>
        </BrowserRouter>
    )
}

export default App