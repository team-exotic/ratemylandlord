/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date 04/16/2020
 * @description combines all reducers
 *
 * ************************************
 */
import { combineReducers } from 'redux';

//import reducers here
import userReducer from './userReducer';


//combine reducers here
const reducers = combineReducers({
  //reducers place here
  user: userReducer
});

export default reducers;
