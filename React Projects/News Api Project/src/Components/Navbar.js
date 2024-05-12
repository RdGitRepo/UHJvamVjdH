import { Link, NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom";

export default function Navbar() {

  const RouteName = ["business","entertainment","general","health","science","sports","technology"];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mycssforNavbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NEWS APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlinks">
              {RouteName.map((item) => {
                return (
                  <li className="nav-item" key={item}>
                    <NavLink className={"nav-link"} to={`/${item}`} >{item.toUpperCase()}</NavLink>
                  </li>
                )
              })}       
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
