import React from 'react'
import NavBar from '../navbar/NavBar'
import Hero from '../hero/Hero'
import Business from '../business/Business'
import Billing from '../billing/Billing'
import FindCard from '../findCard/FindCard'
import Aboutus from '../aboutus/Aboutus'
import Start from '../start/Start'
import Footer from '../footer/Footer'
import './App.css'
const App = () => {
return (
    <>
    <NavBar/>
    <Hero/>
    <Business/>    
    <Billing/>
    <FindCard/>
    <Aboutus/>
    <Start/>
    <Footer/>
    </>
)
}

export default App