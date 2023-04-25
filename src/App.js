import React from 'react'
import Header from './Components/Headers/Header'
import TopContainer from './Components/TopCcontainer/TopContainer'
import SkillContainer from './Components/SkillCondainer/SkillContainer'
import Projectcontainer from './Components/Projects/Projectcontainer'
import './App.css'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      < Header/>
      <TopContainer/>
      <SkillContainer/>
      <Projectcontainer/>
      <Contact/>
    </div>
  )
}

export default App
