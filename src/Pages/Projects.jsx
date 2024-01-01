import React from 'react'
import Footer from '../Components/Footer/Footer'
import Consult from '../Components/Home/Consult/Consult'
import Project from '../Components/Project/Project'
import Projec from '../Components/Home/Projects/Projects'
import Navbar from '../Components/Navbar/Navbar'
const Projects = () => {
  return (
    <div className='project-view'>
      <div className="dark-navbar">
        <Navbar hamColor="#FFF"/>
      </div>
      <Projec />
      <Consult />
      <Footer />
    </div>
  )
}

export default Projects