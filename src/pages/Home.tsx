import DisplayAllIconsMap from '../components/ProjectContainer/DisplayAllIconsMap'
import DisplayAllProjectsMap from '../components/ProjectContainer/DisplayAllProjectsMap'

function Home() {
  return (
    <div id="mainPage">
      <div id="main-page-heading">
        <h1 className="margin-top-2">David Blatt's Portfolio Website</h1>
      </div>
      <h2 className="margin-top-5">
        The skills, tools and technologies I use to bring your products to life:
      </h2>
      <DisplayAllIconsMap />
      <h2 className="margin-top-5">
        View some of the project's I've been working on:
      </h2>
      <DisplayAllProjectsMap />
    </div>
  )
}

export default Home
