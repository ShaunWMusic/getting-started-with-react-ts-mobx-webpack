import * as React from "react";
import { useObserver } from "mobx-react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Counter from "./counter";

function AppRouter() {
  return useObserver(() => (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Route path="/counter" component={Counter} />
    </Router>
  ));
}

export default AppRouter;
