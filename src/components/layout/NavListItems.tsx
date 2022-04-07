import { NavLink } from 'react-router-dom'

function NavListItems({ closeSideMenu }: { closeSideMenu: () => void }) {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ]
  return (
    <ul className="nav-items">
      {navigation.map((navItem, index) => (
        <li className="nav-items-items line" key={index}>
          <NavLink
            to={navItem.href}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeSideMenu}
            onKeyPress={closeSideMenu}
          >
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavListItems
