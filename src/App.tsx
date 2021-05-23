import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.global.css';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import Home from './Pages/Home';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  );
}
