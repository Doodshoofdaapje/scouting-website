import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ASG_Name from './components/asg_name/ASG_Name';

function App() {
  return (
    <>
      <Navbar/>

      <Router>
        <Routes>
          <Route exact={true} path="/" element={<HomePage/>}/>
          <Route exact={true} path="/naam" element={<ASG_Name/>}/>
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
