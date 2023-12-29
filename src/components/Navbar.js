import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg bg-secondary-subtle p-0">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h2>News</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item pe-5 font-size">
                  <Link className="nav-Link text-decoration-none text-black" to="/">
                    general
                  </Link>
                </li>
                <li className="nav-item pe-5 font-size">
                  <Link className="nav-Link text-decoration-none text-black" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-Link pe-5 font-size text-decoration-none text-black"
                    to="/business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item pe-5 font-size ">
                  <Link className="nav-Link text-decoration-none text-black" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item pe-5 font-size ">
                  <Link className="nav-Link text-decoration-none text-black" to="/health">
                    health
                  </Link>
                </li>
                <li className="nav-item pe-5 font-size ">
                  <Link className="nav-Link text-decoration-none text-black" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item pe-5 font-size ">
                  <Link className="nav-Link text-decoration-none text-black" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
