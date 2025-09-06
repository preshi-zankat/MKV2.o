import Navbar from './Components/Navbar'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Support from './pages/Support'
import Writeing from './pages/Writeing'
import Login from './pages/Login'
import SignUp from './pages/SignUp' 

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Writeing' element={<Writeing />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/support' element={<Support />} />   
      </Routes>

    </>
  )

}

export default App
