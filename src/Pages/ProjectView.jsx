import React from 'react'
import Footer from '../Components/Footer/Footer'
import Consult from '../Components/Home/Consult/Consult'
import Project from '../Components/Project/Project'
import Projec from '../Components/Home/Projects/Projects'
const ProjectView = () => {
  return (
    <div className='project-view'>
      <Project />
      <Projec />
      <Consult />
      <Footer />
    </div>
  )
}

export default ProjectView