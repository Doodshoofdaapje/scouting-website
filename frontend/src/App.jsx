import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ASG_Name from './components/asg_name/ASG_Name';
import ASG_Speltakken from './components/asg_speltakken/ASG_Speltakken';

function App() {
  return (
    <>
      <Navbar/>

      <Router>
        <Routes>
          <Route exact={true} path="/" element={<HomePage/>}/>
          <Route exact={true} path="/naam" element={<ASG_Name/>}/>
          <Route exact={true} path="/speltakken" element={<ASG_Speltakken/>}/>
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
