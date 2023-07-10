import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'


const TopContent = () => {
  return (
    <div className='top-content'>
        <div className='top-content__container'>
      <h1>K P Karthick</h1>
      <p>A Professional Web Developer</p>
      <a href='https://docs.google.com/document/d/1szk_wSJLTxRqmS0mhMaSZBAJ5fGW98bwEPWq3OWe-k8/edit?usp=sharing'>
        <button className='top-content__downloadbtn'>View CV</button>
      </a>
      <Link to='project' smooth={true} duration={500}>
        <button className='top-content__workbtn'>My Work</button>
        </Link>
    </div>
    </div>
  )
}

export default TopContent
