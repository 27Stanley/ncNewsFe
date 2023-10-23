import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Articles from './components/Articles'

function App() {

  return (
    <main className='container'>
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/articles" element={<Articles></Articles>} />

      </Routes>
      
    </main>
  )
}

export default App
