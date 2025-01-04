import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import BuyPage from './pages/BuyPage'
import TransfferPage from './pages/TransfferPage'
import WithdrawPage from './pages/WithdrawPage'
import HistoryPage from './pages/HistoryPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/buy' element={<BuyPage/>}/>
      <Route path='/transfer' element={<TransfferPage/>}/>
      <Route path='/withdraw' element={<WithdrawPage/>}/>
      <Route path='/history' element={<HistoryPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
