import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
      <p>random paragraph</p>
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <div>
            <p>This is the home page</p>
            <Link to="/profile">Go to profile page!</Link>
            <p>New Change</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
