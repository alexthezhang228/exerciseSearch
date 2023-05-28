
import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import Home from './pages/Home'
import ExercisesDetails from './pages/ExercisesDetails'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>   
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exercise/:id" element={<ExercisesDetails/>} />
        </Routes>
        <Footer/>
      </Box>
    </BrowserRouter>
  )
}

export default App
