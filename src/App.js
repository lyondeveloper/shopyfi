import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';
import Auth from './components/pages/auth/auth';
import { auth } from './firebase/utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
