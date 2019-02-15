import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={SideBar} />
      </Switch>

    </div>
  );
}

export default App;