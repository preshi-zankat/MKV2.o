import Navbar from './Components/Navbar'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Support from './pages/Support'
import Writeing from './pages/Writeing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const location = useLocation();

  // pages where navbar should NOT show
  const hideNavbarRoutes = ['/login', '/signup'];

  return (
    <>
      {/* CONDITION */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route
  path="/Writeing"
  element={
    <ProtectedRoute>
      <Writeing />
    </ProtectedRoute>
  }
/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<Support />} />
      </Routes>
    </>
  );
}

export default App;