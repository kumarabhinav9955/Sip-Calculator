import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className="bg-gradient-to-r from-emerald-200 to-lime-400">
      <div className="">
        <Navbar/>
        <Home/>
        <Footer/>
        </div>
    </div>
  )
}

export default App
