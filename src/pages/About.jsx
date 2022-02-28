import { accessibilityText } from 'npmtestdb99'

function About() {
  return (
    <>
      <h1 className="margin-bottom-1">About</h1>
      <p>
        This website was made using React. All the CSS has been created using
        Sass without any CSS frameworks .
      </p>
      <p className="margin-top-1">
        {accessibilityText}{' '}
        <a
          href="https://github.com/9dnsb/db-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          my Github repository{'.'}
        </a>
      </p>
    </>
  )
}

export default About
