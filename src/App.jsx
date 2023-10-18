import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weclome from "./components/index";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Weclome />} />
       



        </Routes>    </Router>
    </>
  )
}

export default App
