import { FaGrav } from 'react-icons/fa'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import classNames from 'classnames'
import NavListItems from './NavListItems'

function NavBar() {
  const [isOpen, setOpen] = useState(false)

  const hamClicked = () => {
    window.scrollTo(0, 0)
    setOpen((prevCheck) => !prevCheck)
  }

  return (
    <nav>
      <div id="hamburger" className={classNames(isOpen && 'positionFixed')}>
        <Hamburger toggled={isOpen} toggle={hamClicked} label="menu" />
        <FaGrav
          size="40px"
          className={classNames('justify-self', isOpen && 'displayNone')}
        />
      </div>
      <div
        id="mySidenav"
        className={classNames(
          'sidenav',
          isOpen && 'width100',
          !isOpen && 'width0'
        )}
      >
        <NavListItems closeSideMenu={hamClicked} />
      </div>
      <div id="main-nav">
        <NavListItems closeSideMenu={() => null} />

        <div id="nav-icon">
          <FaGrav size="40px" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
