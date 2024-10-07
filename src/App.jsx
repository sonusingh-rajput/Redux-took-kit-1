import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Users from './Components/Users'
import Home from './Components/Home'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
      <nav className='flex gap-10 justify-center p-4 font-semibold'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App