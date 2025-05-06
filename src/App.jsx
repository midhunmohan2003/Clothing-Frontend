import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import Home from './Pages/Home/Home'
import Authorization from './Pages/Authorization/Authorization'
import Wishlist from './Pages/WishList/wishlist'
import Cart from './Pages/Cart/Cart'
import View from './Pages/ViewProducts/View'


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Authorization/>} />
      <Route path='/register' element={<Authorization register/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/view' element={<View/>} />
     </Routes>
    </>
  )
}

export default App
