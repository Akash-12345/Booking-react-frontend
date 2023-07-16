import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import "./Home.css"

const Home = () => {
  return (
    
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
           <Featured/>
           <h1 className="homeTitle">Browse through our Property List</h1>
        </div>
    </div>
  )
}

export default Home