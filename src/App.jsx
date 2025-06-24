import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import Home from './Pages/Home/Home'
import Authorization from './Pages/Authorization/Authorization'
import Cart from './Pages/Cart/Cart'
import View from './Pages/ViewProducts/View'
import Checkout from './Pages/Checkout/Checkout'
import History from './Pages/OrderHistory/History'
import Account from './Pages/Account/Account'
import { AuthProvider } from './context/AuthContext'
import Wishlist from './Pages/WishList/wishlist'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Authorization register={false} />} />
        <Route path='/register' element={<Authorization register={true} />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
