import { action, runInAction } from 'mobx';
import { useLocalStore, useObserver } from 'mobx-react';
import React, { useEffect } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Todo from './todo';

function AppRouter() {
  


  return useObserver(() => (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo List</Link>
          </li>
        </ul>
      </nav>
      <Route path='/todo' component={Todo}/>
    </Router >
  ));
}

export default AppRouter;