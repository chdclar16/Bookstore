import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import CreateBooks from './components/CreateBooks.jsx'
import ShowBook from './components/ShowBook.jsx'
import EditBook from './components/EditBook.jsx'
import DeleteBook from './components/DeleteBook.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
