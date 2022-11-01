import { projectsObj } from '../projectsArray'
import Project from './Project'

function DisplayAllProjectsMap() {
  return (
    <div>
      {projectsObj.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  )
}

export default DisplayAllProjectsMap
