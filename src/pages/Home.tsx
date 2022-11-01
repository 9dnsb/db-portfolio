import DisplayAllIconsMap from '../components/ProjectContainer/DisplayAllIconsMap'
import DisplayAllProjectsMap from '../components/ProjectContainer/DisplayAllProjectsMap'

function Home() {
  return (
    <div id="mainPage">
      <div id="main-page-heading">
        <div className="card">
          <h1 className="margin-top-2 portHeader">David Blatt's Portfolio</h1>
        </div>
      </div>

      <DisplayAllIconsMap />
      <h2 className="portHeader">Some of my projects:</h2>
      <DisplayAllProjectsMap />
    </div>
  )
}

export default Home
