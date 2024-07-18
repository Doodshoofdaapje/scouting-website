import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/homepage';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>

      <Router>
        <Routes>
          <Route exact={true} path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
