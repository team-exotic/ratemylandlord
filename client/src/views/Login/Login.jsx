import React from 'react';

// imports the dual purpose auth form
import LoginSignup from '../../components/LoginSignup/LoginSignup';

const Login = () => {
  /**
   * NOTE TO SELF:
   * PICK UP BY EXTRACTING ALL OF THE BELOW RETURN CODE INTO A SEPARATE COMPONENT
   * THAT USERS TERNARY OPERATORS TO DETERMINE CLASSNAMES / BACKGROUNDS, ETC
   * HANDLSUBMIT, USER/PASSWORD STATE, ETC WILL ALL LIVE IN THAT COMPONENT
   *
   * Login and Signup will then be separate views that do almost nothing besides prop drill a piece of state
   * that prop will be props.currPage, and will let child component know whether to use login or signup in it's ternarys
   * this will result in some classname changes, a dif page background, and a different handleSubmit (dif fetch req)
   */
  return (
    <>
      {/* tell the auth form to display the appropriate classes/text for a login view */}
      <LoginSignup currView="login" />
    </>
  );
};

export default Login;
