import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Users from './components/Users/Users';
import Repositories from './components/Repositories/Repositories';
import { SingleRepo } from './components/Repositories/SingleRepo/SingleRepo';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/repositories/:id' component={Repositories} />
        <Route exact path='/repositories/:id/:id' component={SingleRepo} />
    </Switch>
  );
};

export default App;