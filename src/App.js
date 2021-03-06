import React, { Component } from 'react';
import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <AppNavbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
