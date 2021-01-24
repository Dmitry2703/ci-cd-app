import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Home from './Home';

const About = () => <h1>About</h1>;
const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <Link to="/user/42" >See user 42</Link>
    </>
  );
};
const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User</h1>
      <p>Hi user with id {userId}</p>
    </>
  );
};

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/">
          <Users />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
