import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      {/* link to home page */}
      <Link to="/">Logo</Link>
      <div>
        {/* link to our-company page */}
        <Link to="/about">Our Company</Link>

        {/* link to locations page */}
        <Link to="/locations">Locations</Link>

        {/* link to contact page */}
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
