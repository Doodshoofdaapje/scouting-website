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
import Ligging from './components/gebouw/ligging.jsx';
import OpenbaarVervoer from './components/gebouw/ov.jsx';
import Omgeving from './components/gebouw/omgeving.jsx';
import Stichting from './components/gebouw/stichting.jsx';
import Sponsoren from './components/gebouw/sponsoren.jsx';
import Geschiedenis from './components/groep/geschiedenis/Geschiedenis.jsx';
import GeschiedenisPost from './components/groep/geschiedenis/GeschiedenisPost.jsx';
import Verhuur from './components/overig/verhuur/Verhuur.jsx';
import Beunloeg from './components/beunploeg/Beunploeg.jsx';
import Onderhoud from './components/beunploeg/Onderhoud.jsx';
import Groen from './components/beunploeg/Groen.jsx';
import Historie from './components/beunploeg/Historie.jsx';
import Beunkeurmerk from './components/beunploeg/Beunkernmerk.jsx';
import Mollenteller from './components/beunploeg/Mollenteller.jsx';
import Contact from './components/overig/Contact.jsx';
import Privacy from './components/overig/Privacy.jsx';
import Veiligheid from './components/overig/Veiligheid.jsx';
import Groepsdag from './components/groep/groepsdag/Groepsdag.jsx';
import GroepsdagPost from './components/groep/groepsdag/GroepsdagPost.jsx';
import NewsPage from './components/overig/news/NewsPage.jsx';
import NewsArticle from './components/overig/news/NewsArticle.jsx';

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
          <Route path="/ligging" element={<Ligging/>}/>
          <Route path="/openbaarvervoer" element={<OpenbaarVervoer/>}/>
          <Route path="/omgeving" element={<Omgeving/>}/>
          <Route path="/stichting" element={<Stichting/>}/>
          <Route path="/sponsoren" element={<Sponsoren/>}/>
          <Route path="/geschiedenis" element={<Geschiedenis/>}/>
          <Route path="/geschiedenis/:id" element={<GeschiedenisPost />} />
          <Route path="/verhuur" element={<Verhuur />} />
          <Route path="/beunploeg" element={<Beunloeg />} />
          <Route path="/onderhoud" element={<Onderhoud />} />
          <Route path="/groen" element={<Groen />} />
          <Route path="/historie" element={<Historie />} />
          <Route path="/beunkenmerk" element={<Beunkeurmerk />} />
          <Route path="/mollenteller" element={<Mollenteller />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/veiligheid" element={<Veiligheid />} />
          <Route path="/groepsdag" element={<Groepsdag/>}/>
          <Route path="/groepsdag/:id" element={<GroepsdagPost />} />
          <Route path="/nieuws" element={<NewsPage/>}/>
          <Route path="/nieuws/:id" element={<NewsArticle />} />
        </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
