function About() {
  return (
    <>
      <h1 className="margin-bottom-1">About</h1>
      <p>
        This website was made using React. All the CSS has been created without
        any CSS frameworks using Sass.
      </p>
      <p className="margin-top-1">
        I have tried to make the code as clean as possible. It can be viewed on{' '}
        <a
          href="https://github.com/9dnsb/db-portfolio"
          className="text-accent"
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
