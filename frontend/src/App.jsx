import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ASG_Name from './components/asg_name/ASG_Name';
import ASG_Speltakken from './components/asg_speltakken/ASG_Speltakken';
import Bevers from './components/asg_speltakken/Bevers';
import Welpen from './components/asg_speltakken/Welpen';
import Scouts from './components/asg_speltakken/Scouts';
import RSA from './components/asg_speltakken/RSA';
import Pivos from './components/asg_speltakken/Pivos.jsx';
import Senioren from './components/asg_speltakken/Senioren.jsx';
import Uniform from './components/uniform/Uniform.jsx';
import Lidmaatschap from './components/lidmaatschap/Lidmaatschap.jsx';

function App() {
  return (
    <>
      <Navbar/>

      <Router basename="/scouting-website">
        <Routes>
          <Route exact={true} path="/" element={<HomePage/>}/>
          <Route exact={true} path="/naam" element={<ASG_Name/>}/>
          <Route exact={true} path="/speltakken" element={<ASG_Speltakken/>}/>
          <Route exact={true} path="/speltakken/bevers" element={<Bevers/>}/>
          <Route exact={true} path="/speltakken/welpen" element={<Welpen/>}/>
          <Route exact={true} path="/speltakken/scouts" element={<Scouts/>}/>
          <Route exact={true} path="/speltakken/rsa" element={<RSA/>}/>
          <Route exact={true} path="/speltakken/pivos" element={<Pivos/>}/>
          <Route exact={true} path="/speltakken/senioren" element={<Senioren/>}/>
          <Route exact={true} path="/uniform" element={<Uniform/>}/>
          <Route exact={true} path="/lidmaatschap" element={<Lidmaatschap/>}/>
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
