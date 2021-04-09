import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/All';
import Active from './pages/Active';
import Done from './pages/Done';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/active' component={Active} exact />
        <Route path='/done' component={Done} exact />
      </Switch>
    </Router>
  )
}

export default Routes;