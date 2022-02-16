import { GiFootprint } from 'react-icons/gi'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="" id="main-footer">
      <div>
        <GiFootprint size="50px" color="white" />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
