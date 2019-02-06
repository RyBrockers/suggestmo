/* eslint-disable react/no-unused-state */
import React from 'react';
import { Route } from 'react-router-dom';
import './Styles/app.scss';
import HomePage from './Components/Homepage';
import VertNav from './Components/VertNav';
import SignUp from './Components/Signup';
import Login from '../src/Components/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <React.Fragment>

        <div className="sidebar">
          <VertNav />
        </div>
        <div className="main">
          <Route exact path="/Homepage" component={HomePage} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/" component={Login} />

        </div>
      </React.Fragment>
    );
  }
}

export default App;
