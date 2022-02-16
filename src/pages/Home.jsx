import Project from '../components/ProjectContainer/Project'

function Home() {
  return (
    <>
      <div id="main-page-heading">
        <h1 className="margin-top-2">David Blatt's Portfolio Website</h1>
        <h2 className="margin-top-1">
          View some of the project's I've been working on
        </h2>
      </div>
      <div className="margin-top-3">
        <Project />
      </div>
    </>
  )
}

export default Home
