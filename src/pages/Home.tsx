import DisplayAllIconsMap from '../components/ProjectContainer/DisplayAllIconsMap'
import DisplayAllProjectsMap from '../components/ProjectContainer/DisplayAllProjectsMap'

function Home() {
  return (
    <div id="mainPage">
      <div id="main-page-heading">
        <div className="card">
          <h1 className="margin-top-2 portHeader">
            David Blatt's Portfolio Website
          </h1>
        </div>
      </div>

      <DisplayAllIconsMap />
      <h2 className="margin-top-5 portHeader">
        View some of the project's I've been working on:
      </h2>
      <DisplayAllProjectsMap />
    </div>
  )
}

export default Home
