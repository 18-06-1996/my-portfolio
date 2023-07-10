import React from 'react'
import{Element} from 'react-scroll'
import './Projectcontainer.css'
import Project from '../Project/Project'


const Projectcontainer = () => {

const projects =  [
  {
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D199302124882118&tbnid=c-_PAGlMsallCM&vet=12ahUKEwjD3NX03IOAAxVx0qACHSk3AkAQMygHegUIARDmAQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2F112351943577137%2Fphotos%2Fa.112357660243232%2F199302124882118%2F%3Ftype%3D3&docid=P-4JimB54ie1OM&w=512&h=512&q=shop%20zone%20logo&ved=2ahUKEwjD3NX03IOAAxVx0qACHSk3AkAQMygHegUIARDmAQ",
    title:"Shop Zone",
    desc:"Welocme to Shop zone. One of the wonderful online parchase platform.",
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
