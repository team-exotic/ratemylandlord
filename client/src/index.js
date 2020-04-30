import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles/owl.theme.default.scss';
import './styles/owl.carousel.scss';
import './styles/main_styles.scss';

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import PropertyResult from './views/PropertyResult/PropertyResult';

import * as serviceWorker from './serviceWorker';
// import 'nodebootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    {/* redux provider insert here, extract it to the map state to props  */}
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route path="/signup" exact render={(props) => <Signup {...props} />} />
          <Route
            path="/property-result/:id"
            render={(props) => <PropertyResult {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
