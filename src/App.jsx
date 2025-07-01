import React from 'react'
import { Route } from 'react-router-dom'
import { Routes, Router } from 'react-router-dom'
import Onboardingscreen from './components/Onboardingscreen'
import Role from './components/Role'
import SelectVibe from './components/SelectVibe'
import Works from './components/Works'
import HomeScreen from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Modal from './components/Modal'
import MusicVoteScreen from './components/MusicVoteScreen'

const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Onboardingscreen />} />
      {/* Add more routes here as needed */}
      <Route path="/role" element={<Role />} />
      <Route path="/select-vibe" element={<SelectVibe />} />
      <Route path="/works" element={<Works />} />
       <Route path="/home" element={<HomeScreen />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/modal" element={<Signup />} />
        <Route path="/musicvotescreen" element={<MusicVoteScreen />} />


      {/* Add more routes here as needed */}


    
    </Routes>
  
  )
}

export default App
