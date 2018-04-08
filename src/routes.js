import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { NotFound } from './components/NotFound';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';


const Routes = (props) => (
  <BrowserRouter >
    <div>
      <Header />
      <SideBar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
        {/* <Route path="/login" component={ Login }/> */}
        {/* <Route path="/signup" component={ Signup }/> */}
        <Route path="*" component={ NotFound }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;