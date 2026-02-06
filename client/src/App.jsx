import React from 'react'
import bgImage from './assets/bg2.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
const App = () => {
  return <div
    style={{ backgroundImage: `url(${bgImage})` }}
    className='h-screen bg-no-repeat w-screen  bg-cover text-white'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profiler />}></Route>
      </Routes>
    </Router>
  </div>
}

export default App
