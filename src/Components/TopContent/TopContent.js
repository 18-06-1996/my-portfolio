import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'


const TopContent = () => {
  return (
    <div className='top-content'>
        <div className='top-content__container'>
      <h1>K P Karthick</h1>
      <p>A Professional Web Developer</p>
      <a href='#'>
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
