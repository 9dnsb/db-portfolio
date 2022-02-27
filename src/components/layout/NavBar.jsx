import { Link } from 'react-router-dom'
import { FaGrav } from 'react-icons/fa'

function NavBar() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav>
      <div id="main-nav">
        <ul className="nav-items">
          {navigation.map((navItem, index) => (
            <li className="nav-items-items" key={index}>
              <Link to={navItem.href}>{navItem.name}</Link>
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
