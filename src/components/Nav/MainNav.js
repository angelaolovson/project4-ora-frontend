import { NavLink } from "react-router-dom";
import "./MainNav.css";

function MainNav() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <h1 className="logo">👩🏿‍🍳👷🏽‍♂️👩🏿‍⚖️airbnb app🥷🏽🧑🏽‍🏫👩🏻‍⚕️</h1>
      </NavLink>

      <div className="nav-items">
        <NavLink to={"/"}>
          <button>🏠HOME</button>
        </NavLink>
        <NavLink to={"/new"}>
          <button>⚒️Make a New Person</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;