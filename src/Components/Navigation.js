import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navWrapper">
    <button className="menuIcon">toggle menu</button>
    <nav className="navigation" id="menu">
      <Link className="navLink" to="/books">Library</Link>
    </nav>
  </div>
  )
}

export default Navigation
