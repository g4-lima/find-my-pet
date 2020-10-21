import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PetsMap from './pages/PetsMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={PetsMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
