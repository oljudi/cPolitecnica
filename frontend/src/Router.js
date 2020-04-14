import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound';

const Router = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Router;
