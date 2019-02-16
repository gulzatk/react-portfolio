import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Interests from './Interests';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route path='/interests' component={Interests} />
      </Switch>

    </div>
  );
}

export default App;