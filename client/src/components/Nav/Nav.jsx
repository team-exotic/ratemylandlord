// build navr bar here and import it into hom.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Home from '../../views/Home/Home.jsx';
import Login from '../../views/Login/Login.jsx';
// import Signup from '../../views/Signup/Signup.jsx';

const NavBar = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo">
                <a href="#">
                  <img src="images/logo.png" alt></img>
                </a>
              </div>
              {/* <nav class="main_nav">
                <ul>
                  <li class="active">
                  <FontAwesomeIcon color="white" icon={faHome}/> 
                    <a href="../../images/index.html"> Home </a>
                  </li>
                  <li class="active">
                    need to get the profile button to conditionally render
                    <a href="../../html_files/profile.html">Profile</a>
                  </li>
                  <li class="active">
                    <a href="../../html_files/properties.html">Properties</a>
                  </li>
                </ul>
              </nav> */}
              <nav class="phone_num ml-auto">
                <Link className="phone_num_inner"Link to="/">
                  <span> Home </span>{' '}
                </Link>
                <Link className="phone_num_inner" Link to="/login">
                  <span> Login </span>{' '}
                </Link>
                <Link
                  className="phone_num_inner"
                  Link to="/signup"
                >
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
