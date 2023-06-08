import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import ShowBooks from '../features/books/ShowBooks'
import AddBook from '../features/books/AddBook'

const Index = () => {
  return (
    <div>
         <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/show-books' element={<ShowBooks />}/>
                    <Route path='/add-book' element={<AddBook />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </main>         
         </BrowserRouter>
    </div>
  )
}

export default Index
