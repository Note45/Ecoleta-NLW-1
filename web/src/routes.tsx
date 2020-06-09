import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SuccessRegister from './pages/SuccessRegister';
import SearchPoint from './pages/SearchPoint';
import PointsList from './pages/PointsList';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreatePoint} path='/create-point' />
      <Route component={SuccessRegister} path='/success'/>
      <Route component={SearchPoint} path='/search-point'/>
      <Route component={PointsList} path='/points-list'/>
    </BrowserRouter>
  );
}

export default Routes;