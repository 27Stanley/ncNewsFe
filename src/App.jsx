import { Route, Routes } from 'react-router-dom'


import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Articles from './components/Articles'
import ArticleById from './components/ArticlesById'



function App() {

  return (
    <main className='container'>
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/articles/:articleId" element={<ArticleById />} />


      </Routes>
      
    </main>
  )
}

export default App
