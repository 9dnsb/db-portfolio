import { ProjectObject } from '../../types/ProjectType'

function Project({ project }: { project: ProjectObject }) {
  return (
    <div className="card margin-bottom-2">
      <figure className="main-img-size mx-auto ">
        <img className="margin-top-1" src={project.img} alt="" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="margin-bottom-1 margin-top-1">{project.title}</h2>
        <p>{project.p}</p>

        <a
          className="aButton"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View Site
        </a>
      </div>
    </div>
  )
}

export default Project
