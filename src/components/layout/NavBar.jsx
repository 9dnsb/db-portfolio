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
        <ul>
          <div id="nav-items">
            {navigation.map((navItem, index) => (
              <div id="nav-items-items" key={index}>
                <li>
                  <Link to={navItem.href}>{navItem.name}</Link>
                </li>

                <div
                  className={`${index < navigation.length - 1 && 'line'}`}
                ></div>
              </div>
            ))}
          </div>
          <div id="nav-icon">
            <FaGrav size="40px" className="mx-auto" />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
