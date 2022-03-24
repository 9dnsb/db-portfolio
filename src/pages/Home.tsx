import Project from '../components/ProjectContainer/Project'
import { projectsObj } from '../components/projectsArray'

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
        {projectsObj.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
      {/* <div className="iconSize">
        <i className="devicon-css3-plain"></i>
        <i className="devicon-express-original"></i>
        <i className="devicon-git-plain"></i>
        <i className="devicon-github-original"></i>
        <i className="devicon-heroku-original"></i>
        <i className="devicon-html5-plain"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-jest-plain"></i>
        <i className="devicon-materialui-plain"></i>
        <i className="devicon-markdown-original"></i>
        <i className="devicon-mongodb-plain"></i>
        <i className="devicon-nextjs-original"></i>
        <i className="devicon-nodejs-plain"></i>
        <i className="devicon-npm-original-wordmark"></i>
        <i className="devicon-pandas-original"></i>
        <i className="devicon-python-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-redux-original"></i>
        <i className="devicon-sass-original"></i>
        <i className="devicon-spss-plain"></i>
        <i className="devicon-swift-plain"></i>
        <i className="devicon-tailwindcss-original-wordmark"></i>
        <i className="devicon-typescript-plain"></i>
        <i className="devicon-vscode-plain"></i>
      </div> */}
    </>
  )
}

export default Home
