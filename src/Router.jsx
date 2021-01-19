import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
