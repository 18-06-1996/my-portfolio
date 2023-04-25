import React from 'react'
import{Element} from 'react-scroll'
import './Projectcontainer.css'
import Project from '../Project/Project'

const Projectcontainer = () => {

const projects =  [
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 1",
    desc:"welocme to  you",
    link:"www.google.com",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 2",
    desc:"welocme to  you",
    link:"www.google.com",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 3",
    desc:"welocme you",
    link:"www.google.com",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 4",
    desc:"welocme to you.",
    link:"www.google.com",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 5",
    desc:"welocme to you",
    link:"www.google.com",
  },
  {
    img: "https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg",
    title:"Project - 6",
    desc:"welocme to  you",
    link:"www.google.com",
  },
]



  return (
    <div>
        <Element className='projectcontainer' id='project'>
          <h1>Projects</h1>
          <p>Here are some proects which i done for making lives of people easy</p>
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
