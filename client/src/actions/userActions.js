/**
 * ************************************
 *
 * @module  userActions.js
 * @author ratemylandlord
 * @date 04/16/2020
 * @description Action Creators for userReducer
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

const logout = () => {
  return (dispatch) => {
    //clears all cookies to logout user
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let position = cookie.indexOf('=');
      const name = position > -1 ? cookie.substr(0, position) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    return dispatch({
      type: types.USER_LOGOUT
    });
  };
};

const login = () => {
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGIN
    });
  };
};

export const userActions = {
  login,
  logout
};
