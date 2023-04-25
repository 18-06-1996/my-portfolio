import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material'
import React from 'react'
import {Element}from 'react-scroll'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>

<h1>contact</h1>
<div className='contact__container'>
    <p>Address : <span> North Street, Chinna Udaippu, P.T.C. Post, Madurai - 625022</span></p>
    <p>E-mail : <span>karthick18696@gmail.com</span></p>
    <p>Mobile : <span> 8428066134</span></p>
    <p>Social Media : </p>
    <div className='contact_icons'> 

    

    <a href='https://github.com/18-06-1996'>
         <IconButton>
        <GitHubIcon/>
         </IconButton>
    </a>

    <a href='https://www.linkedin.com/in/k-p-karthick-729880139'>
    <IconButton>
        <LinkedIn/>
         </IconButton>
         </a>
         <a href='https://www.facebook.com/profile.php?id=100009787201253'>
         <IconButton>
        <Facebook/>
         </IconButton>
         </a>
         <a href='https://www.instagram.com/k_p_karthick_/'>
         <IconButton>
        <Instagram/>
         </IconButton>
    </a>
    </div>
</div>
    </Element>
  )
}

export default Contact
