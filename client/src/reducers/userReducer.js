/**
 * ************************************
 *
 * @module  userReducer
 * @author
 * @date 04/16/2020
 * @description reducer to  maintain the state of user data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';


const userState = {
  //any other state variable for the users go here
  isLoggedIn: false
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case types.USER_LOGOUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
