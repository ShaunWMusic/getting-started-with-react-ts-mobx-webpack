import { useObserver } from 'mobx-react';
import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { CounterComponent } from './CounterComponent';

function AppRouter() {
  
  return useObserver(() => (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
        </ul>
      </nav>
      <Route path='/counter' component={CounterComponent}/>
    </Router >
  ));
}

export default AppRouter;