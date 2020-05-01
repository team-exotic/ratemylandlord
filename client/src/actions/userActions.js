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
import axios from 'axios';
import * as types from '../constants/actionTypes';

const logout = () => {
  return (dispatch) => {
    document.cookie = 'isLoggedIn; 01 Jan 1970';
    console.log('cookkkiiesss',document.cookie)
    return dispatch({
      type: types.USER_LOGOUT
    });
  };
};

const login = () => {
  // const data = localStorage.getItem('isLoggedIn');
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGIN
      // payload: data
    });
  };
};

export const userActions = {
  login,
  logout
};
