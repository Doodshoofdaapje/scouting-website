import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import {Route, HashRouter as Router, Routes} from 'react-router-dom'
import ASG_Name from './components/groep/ASGName.jsx';
import ASG_Speltakken from './components/groep/asg_speltakken/ASG_Speltakken.jsx';
import Bevers from './components/groep/asg_speltakken/Bevers.jsx';
import Welpen from './components/groep/asg_speltakken/Welpen.jsx';
import Scouts from './components/groep/asg_speltakken/Scouts.jsx';
import RSA from './components/groep/asg_speltakken/RSA.jsx';
import Pivos from './components/groep/asg_speltakken/Pivos.jsx';
import Senioren from './components/groep/asg_speltakken/Senioren.jsx';
import Uniform from './components/groep/Uniform.jsx';
import Lidmaatschap from './components/groep/Lidmaatschap.jsx';
import Groepsbestuur from './components/groep/Groepsbestuur.jsx';
import Infographic from './components/groep/Infographic.jsx';
import OntdekScouting from './components/scouting/OntdekScouting.jsx';
import ScoutingNederland from './components/scouting/ScoutingNederland.jsx';
import GebouwInformatie from './components/gebouw/informatie.jsx';

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
          <Route path="/ontdekscouting" element={<OntdekScouting/>}/>
          <Route path="/scoutingnederland" element={<ScoutingNederland/>}/>
          <Route path="/gebouwinformatie" element={<GebouwInformatie/>}/>
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
