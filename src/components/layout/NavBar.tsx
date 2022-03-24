import { NavLink } from 'react-router-dom'
import { FaGrav } from 'react-icons/fa'

function NavBar() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <nav>
      <div id="main-nav">
        <ul className="nav-items">
          {navigation.map((navItem, index) => (
            <li className="nav-items-items line" key={index}>
              <NavLink
                to={navItem.href}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div id="nav-icon">
          <FaGrav size="40px" className="mx-auto" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
