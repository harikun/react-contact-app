import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Contact Apps
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collpase justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              All Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/detail">
              detail
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              category
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
