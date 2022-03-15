// @ts-ignore
import { accessibilityText } from 'npmtestdb99'

function About() {
  return (
    <>
      <h1 className="margin-bottom-1">About</h1>
      <p>
        This website was made using React. All the CSS has been created using
        Sass without any CSS frameworks. I've also incorporated Typescript into
        the website
      </p>
      <p className="margin-top-1">
        I have tried to make the code as clean as possible. It can be viewed on{' '}
        <a
          href="https://github.com/9dnsb/db-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          my Github repository{'.'}
        </a>
      </p>
      <p className="margin-top-1">{accessibilityText} </p>
    </>
  )
}

export default About
