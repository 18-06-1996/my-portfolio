import React from 'react'
import { Element } from 'react-scroll'
import LinearProgress  from "@mui/material/LinearProgress"
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skill">
 
<div className='skillcontainer__image'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOEsG72CHU_32ijQ9kkI3P7mF-t7ABsrh6g&usqp=CAU " alt=''/>
</div>

<div className='skillcontainer__text'>
   <h2>skills</h2>
   <div className='skillcontainer__skillset'>
     <h5>JAVASCRIPT</h5>
     <div className='skillcontainer__slider skillcontainer__slider1' >
        <LinearProgress variant='determinate' value={70} />
     </div>
   </div>
   <div className='skillcontainer__skillset'>
     <h5>HTML</h5>
     <div className='skillcontainer__slider skillcontainer__slider2' >
        <LinearProgress variant='determinate' value={90} />
     </div>
   </div>

   <div className='skillcontainer__skillset'>
     <h5>CSS</h5>
     <div className='skillcontainer__slider skillcontainer__slider3' >
        <LinearProgress variant='determinate' value={80} />
     </div>
   </div>


   <div className='skillcontainer__skillset'>
     <h5>Bootstrap</h5>
     <div className='skillcontainer__slider skillcontainer__slider5' >
        <LinearProgress variant='determinate' value={75} />
     </div>
   </div>


   <div className='skillcontainer__skillset'>
     <h5>REACT</h5>
     <div className='skillcontainer__slider skillcontainer__slider4' >
        <LinearProgress variant='determinate' value={60} />
     </div>
   </div>

   
   <div className='skillcontainer__skillset'>
     <h5>NODE.JS</h5>
     <div className='skillcontainer__slider skillcontainer__slider6' >
        <LinearProgress variant='determinate' value={60} />
     </div>
   </div>

   <div className='skillcontainer__skillset'>
     <h5>MySQL</h5>
     <div className='skillcontainer__slider skillcontainer__slider7' >
        <LinearProgress variant='determinate' value={70} />
     </div>
   </div>

   <div className='skillcontainer__skillset'>
     <h5>mongoDB</h5>
     <div className='skillcontainer__slider skillcontainer__slider8' >
        <LinearProgress variant='determinate' value={67} />
     </div>
   </div>

</div>
    </Element>
    )
}

export default SkillContainer
