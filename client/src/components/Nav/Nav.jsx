// build navr bar here and import it into hom.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Nav.scss';

const NavBar = ({ user }) => {
  // const loginLogOutButton = () => {
  console.log('checking user', { user });
  const dispatch = useDispatch();

  // console.log('verrriiiiffyyyy', verifyLogin());
  useEffect(() => {
    console.log('inUseEffect', { user });
    // if (user) {
    console.log('verrriiiiffyyyy222222', userActions.login, { user });
    dispatch(userActions.login());
    console.log('dispatched', dispatch(userActions.login));
    // }
  });
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
                  <span> Home </span>
                </Link>
                <Link className="phone_num_inner" to="/login">
                  {user ? <span> Logout </span> : <span> Login </span>}
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
