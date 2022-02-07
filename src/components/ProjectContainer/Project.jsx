function Project() {
  return (
    <div className="card text-center shadow-2xl">
      <figure className="px-10 pt-10 main-img-size">
        <img
          src="https://www.pngitem.com/pimgs/m/476-4763739_red-apex-legends-logo-png-hd-pngbg-poster.png"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Apex Legends Data Tracker</h2>
        <p>
          Website that displays stats and info for the games Apex Legends. Users
          can access up to date game info and player stats
        </p>
        <div className="justify-center card-actions">
          <button className="btn btn-outline btn-accent">
            <a
              href="https://flamboyant-leakey-fe8698.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project
