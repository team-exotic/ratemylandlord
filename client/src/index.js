import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './owl.theme.default.scss';
import './owl.carousel.scss';
import './main_styles.scss';
import './responsive.scss';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/owl.theme.default.scss';
import './styles/owl.carousel.scss';
import './styles/main_styles.scss';
import './styles/responsive.scss';
>>>>>>> master
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/" exact render={(props) => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
