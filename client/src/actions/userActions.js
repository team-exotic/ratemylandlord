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

export const verifyLogin = () => (dispatch) => {
  axios
    .post('/login')
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        return dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      }
      return dispatch({
        type: types.USER_LOGIN,
        payload: data
      });
    })
    .catch((err) => console.log(err));
};
