import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/connexion" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/a-propos" exact component={About} />
      <Route component={NotFound} />
    </Switch>
    
    </BrowserRouter>
    
  );
};

export default App;