import Project from '../components/ProjectContainer/Project'

function Home() {
  const projectsObj = [
    {
      img: 'https://www.pngitem.com/pimgs/m/476-4763739_red-apex-legends-logo-png-hd-pngbg-poster.png',
      title: 'Apex Legends Data Tracker',
      p: 'Website that displays stats and info for the game Apex Legends. Users can access up-to-date game info and player stats',
      link: 'https://flamboyant-leakey-fe8698.netlify.app/',
    },
    {
      img: 'https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo',
      title: 'Todo Website',
      p: 'A simple Todo project. Its my first attempt creating a website using the MERN stack. Its also my first time using Material UI.',
      link: 'https://todoapp9dnsb.herokuapp.com/',
    },
  ]
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
    </>
  )
}

export default Home
