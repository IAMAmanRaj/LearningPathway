import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Interest from './pages/Interest';
function App() {

return (
    <>
     <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/interest' element={<Interest/>}/>
          
  </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
