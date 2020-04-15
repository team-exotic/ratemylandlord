import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import './LoginSignup.scss';

// destructures the currView off of the props to determine which view the component is a part of
const LoginSignup = ({ currView }) => {
  console.log(currView);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   * this handleChange covers both the username and password
   * it determines which one to update based on the event it receives
   * if the event target has a type of password, then it updates password -- otherwise, it updates username
   */
  const handleChange = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-logo">
              <img src="../../images/milestones_1.png" alt="apartments" />
            </span>

            <span className="login100-form-title p-b-34 p-t-27">Log in</span>

            <div className="wrap-input100 validate-input" data-validate="Enter username">
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
              />
              {/* these icons should be brought in for style appeal, but need to have the css modified so they float when the input is selected */}
              <FontAwesomeIcon className="focus-input100" color="white" icon={faUser} />
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              {/* these icons should be brought in for style appeal, but need to have the css modified so they float when the input is selected */}
              <FontAwesomeIcon className="focus-input100" color="white" icon={faLock} />
            </div>

            <div className="contact100-form-checkbox">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Login
              </button>
            </div>

            <div className="text-center p-t-3">
              <a className="txt1" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
