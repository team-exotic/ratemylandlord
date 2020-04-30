/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer here
import reducers from './reducers/reducers';
import { userActions } from './actions/userActions';

//adding composeDevTools here to have access to the Redux dev tools
const store = createStore(
  //add reducers
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
// store.dispatch(userActions());

export default store;
