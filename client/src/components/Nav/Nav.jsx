// build navr bar here and import it into hom.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Nav.scss';

const NavBar = () => {
  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {});
  return (
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo">
                <a href="#">
                  {/* <img src="images/logo.png" alt></img> */}
                  <div className="nav_title">
                  <FontAwesomeIcon color="white" icon={faBuilding} />
                    <span> Rate My Landlord </span>
                    </div>
                </a>
              </div>
              <nav class="phone_num ml-auto">
                <Link className="phone_num_inner" Link to="/">
                  <span> Home </span>{' '}
                </Link>
                <Link className="phone_num_inner" Link to="/login">
                  <span> Login </span>{' '}
                </Link>
                <Link className="phone_num_inner" Link to="/signup">
                  <span> Signup </span>
                </Link>
              </nav>
              <div class="hamburger ml-auto">
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
