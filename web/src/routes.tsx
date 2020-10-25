import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PetsMap from './pages/PetsMap';
import Report from './pages/Report';
import List from './pages/List';
import PetDetail from './pages/PetDetails';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={PetsMap} />
        <Route path="/report" component={Report} />
        <Route path="/list" exact component={List} />
        <Route path="/list/:id" component={PetDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
