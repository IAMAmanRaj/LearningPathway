import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Interest from './pages/Interest';

import { AnimatePresence } from 'framer-motion';
function App() {

return (
    <>
     <BrowserRouter>
        <AnimatePresence >
        <Routes>
          <Route path="/" element={<Home key={Router.path} />} />
          <Route path='/interest' element={<Interest/>}/>
          
  </Routes>
  </AnimatePresence>
      
      </BrowserRouter>
    </>
  )
}

export default App
