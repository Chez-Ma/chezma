import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Home from "./components/Home";
import RecipeSummary from "./components/RecipeSummary";
import MenueSelection from "./components/MenueSelection";
import Background from "./components/Background";

function App() {
  return (
      <Fragment>
        <Background>
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
              <Route path="/register">
                  <Register/>
              </Route>
            <Route path="/recipeSummary">
              <RecipeSummary/>
            </Route>
            <Route path="/menueSelection">
              <MenueSelection/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </div>
    </Router>
        </Background>
      </Fragment>
  );
}

export default App;
