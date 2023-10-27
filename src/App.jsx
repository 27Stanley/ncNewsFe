import { Route, Routes } from 'react-router-dom'


import './App.css'

import Header from './components/Header'
import User from './components/User'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Articles from './components/Articles'
import ArticleById from './components/ArticlesById'
import Topics from './components/Topics'


function App() {

  return (
    <main className='container'>
      <Header></Header>
      <NavBar></NavBar>
      <User></User>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articleId" element={<ArticleById />} />

        <Route path="/topics" element={<Topics />} />
        
      </Routes>
      
    </main>
  )
}

export default App
