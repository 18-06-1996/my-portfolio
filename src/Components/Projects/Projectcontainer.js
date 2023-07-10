import React from 'react'
import{Element} from 'react-scroll'
import './Projectcontainer.css'
import Project from '../Project/Project'
import logo from  '../images/logo.png'

const Projectcontainer = () => {

const projects =  [
  {
    img: {logo},
    title:"Shop Zone",
    desc:"Welocme to Shop zone web application. One of the wonderful online parchase platform...!!! ",
    link:"https://lustrous-dolphin-9e5959.netlify.app/",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 2",
    desc:"welocme to  you",
    link:"www.google.com",
  },
  

]



  return (
    <div>
        <Element className='projectcontainer' id='project'>
          <h1>Projects</h1>
          <p>Hii welcome to my Project Page...!</p>
      <div className='projectcontainer__projects'>

        { 
        projects.map((project,index)=>{
return(
          <Project key={index}
          img={project.img}
          title={project.title}
          link={project.link}
          desc={project.desc} />
)
        })
        }
      </div>
      </Element>
    </div>
  )
}

export default Projectcontainer
