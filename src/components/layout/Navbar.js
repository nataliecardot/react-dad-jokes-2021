import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // From https://getbootstrap.com/docs/4.0/components/navbar/#nav
    // lg: ≥992px. navbar-expand-lg: means navbar collapses/menu lis are put in hamburger toggler for sz md and smaller (991px and under)
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Dad Jokes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
