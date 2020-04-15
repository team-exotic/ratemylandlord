// build navr bar here and import it into hom.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Nav.scss';

const NavBar = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              <div className="logo">
                <Link to="/">
                  {/* <img src="images/logo.png" alt></img> */}
                  <div className="nav_title">
                    <FontAwesomeIcon color="white" icon={faBuilding} />
                    <span> Rate My Landlord </span>
                  </div>
                </Link>
              </div>
              <nav className="phone_num ml-auto">
                <Link className="phone_num_inner" to="/">
                  <span> Home </span>{' '}
                </Link>
                <Link className="phone_num_inner" to="/login">
                  <span> Login </span>{' '}
                </Link>
                <Link className="phone_num_inner" to="/signup">
                  <span> Signup </span>
                </Link>
              </nav>
              <div className="hamburger ml-auto">
                <FontAwesomeIcon color="white" icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
