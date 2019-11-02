import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
