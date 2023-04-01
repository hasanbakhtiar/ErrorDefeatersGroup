import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/update/AddBlog'
import EditBlog from './pages/admin/update/EditBlog'
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
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/dashboard/add' element={<AddBlog />}></Route>
                <Route path='/dashboard/edit/:id' element={<EditBlog />}></Route>
            </Routes>
         </Container>
        </BrowserRouter>
    )
}

export default App