import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PetsMap from './pages/PetsMap';
import Report from './pages/Report';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={PetsMap} />
        <Route path="/report" component={Report} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
