 
 import React from 'react';
import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Curriculum from './components/curriculum/Curriculum';
import Achievements from './components/achievements/Achievements';
import Projects from './components/projects/Projects';
import About from './components/about/About';

function App() {
 

  return (
   <>
   
   
   <BrowserRouter>
   <Navigation/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/curriculum' element={<Curriculum/>}/>
    <Route path='/achievements' element={<Achievements/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
   <About/>
   </>
  )
}

export default App
