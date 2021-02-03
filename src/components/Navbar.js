import { NavLink } from "react-router-dom";

function Navbar(props) {
  
  return (
    <nav className="navbar" >
      <h2> Star Wars Wiki</h2>
      <div className="navlinks">
        {props.navLinks.map((link, i) => (
          <NavLink key={i} to={link.path}>{link.name}</NavLink>
          // <a key={i} href={"#" + link} onClick={() => props.goto(link)}>{link[0].toUpperCase() + link.slice(1)}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;