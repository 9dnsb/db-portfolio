import Project from '../components/ProjectContainer/Project'

function Home() {
  return (
    <>
      <h1 className="text-4xl mb-4 mt-4">David Blatt's Portfolio Website</h1>
      <h2 className="mb-4 text-2xl font-light">
        View some of the project's I've been working on
      </h2>
      <Project />
    </>
  )
}

export default Home
