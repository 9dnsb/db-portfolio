function Project({project}) {
  return (
    <div className="card margin-bottom-2">
      <figure className="main-img-size mx-auto">
        <img
          src={project.img}
          alt=""
        />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="margin-bottom-1">{project.title}</h2>
        <p>
          {project.p}
        </p>

        <button className="btn">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Site
          </a>
        </button>
      </div>
    </div>
  )
}

export default Project
