function About() {
  return (
    <>
      <h1 className="text-4xl mb-4">About</h1>
      <p className="mb-4 text-2xl font-light">
        This website was made using React, Tailwind, and daisyUI.
      </p>
      <p className="mb-4 text-2xl font-light">
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
