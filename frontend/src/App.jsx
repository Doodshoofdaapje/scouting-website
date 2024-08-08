import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import {Route, HashRouter as Router, Routes} from 'react-router-dom'
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
import Groepsbestuur from './components/groepsbestuur/Groepsbestuur.jsx';
import Infographic from './components/infographic/Infographic.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/infographic" element={<Infographic/>}/>
          <Route path="/naam" element={<ASG_Name/>}/>
          <Route path="/speltakken" element={<ASG_Speltakken/>}/>
          <Route path="/speltakken/bevers" element={<Bevers/>}/>
          <Route path="/speltakken/welpen" element={<Welpen/>}/>
          <Route path="/speltakken/scouts" element={<Scouts/>}/>
          <Route path="/speltakken/rsa" element={<RSA/>}/>
          <Route path="/speltakken/pivos" element={<Pivos/>}/>
          <Route path="/speltakken/senioren" element={<Senioren/>}/>
          <Route path="/uniform" element={<Uniform/>}/>
          <Route path="/lidmaatschap" element={<Lidmaatschap/>}/>
          <Route path="/groepsbestuur" element={<Groepsbestuur/>}/>
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
