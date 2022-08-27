import React from 'react'
import NavBar from '../navbar/NavBar'
import Hero from '../hero/Hero'
import Business from '../business/Business'
import Billing from '../billing/Billing'
import FindCard from '../findCard/FindCard'
import './App.css'
const App = () => {
return (
    <>
    <NavBar/>
    <Hero/>
    <Business/>    
    <Billing/>
    <FindCard/>
    </>
)
}

export default App