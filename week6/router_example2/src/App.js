import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
      <p>random paragraph</p>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <div>
            <p>This is the home page</p>
            <Link to="/profile">Go to profile page!</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
