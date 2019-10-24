import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

//components
import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Auth from './components/pages/auth/auth';
import Checkout from './components/pages/checkout/checkout';

import Header from './components/header/header';
import { selectCurrentUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/userActions';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/auth'
            render={() =>
              this.props.currentUser !== null ? <Redirect to='' /> : <Auth />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
