import Project from '../components/ProjectContainer/Project'
import { ProjectObject } from '../types/ProjectType'

function Home() {
  const projectsObj: ProjectObject[] = [
    {
      img: 'https://assets.strapi.io/uploads/strapi-starter-next-js-blog_ed5d270419.png',
      title: 'Next.js + Strapi Blog',
      p: 'A simple blog website made with Next.js and Strapi. Followed Bulletproof React coding principles. Totally custom design without any framework. Uses Next.js, Strapi, Axios, Sass, Typescript, SWR, Markdown-it, next-seo, and Cloudinary.',
      link: 'https://david-blog-website.vercel.app/',
    },

    {
      img: 'https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo',
      title: 'Todo Website',
      p: 'A simple Todo project. Its my first attempt creating a website using the MERN stack. Its also my first time using Material UI. Uses MERN Stack, Material UI, Axios, Redux.',
      link: 'https://todoapp9dnsb.herokuapp.com/',
    },
    {
      img: 'https://www.pngitem.com/pimgs/m/476-4763739_red-apex-legends-logo-png-hd-pngbg-poster.png',
      title: 'Apex Legends Data Tracker',
      p: 'Website that displays stats and info for the game Apex Legends. Users can access up-to-date game info and player stats. Uses React, Tailwind, daisyUI, Axios, Context, and Reducer.',
      link: 'https://flamboyant-leakey-fe8698.netlify.app/',
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
