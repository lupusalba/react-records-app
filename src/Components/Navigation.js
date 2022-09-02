import Link from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navWrapper">
    <button className="menuIcon">toggle menu</button>
    <nav className="navigation" id="menu">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/edit-book">EditBook</Link>
      <Link className="navLink" to="/delete-book">DeleteBook</Link>
      <Link className="navLink" to="/new-book">NewBook</Link>
    </nav>
  </div>
  )
}

export default Navigation
