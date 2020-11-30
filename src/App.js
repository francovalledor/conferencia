import React from "react";
import { Conferences } from "./pages/Conferences";
import { Speakers } from "./pages/Speakers";
import { Speaker } from "./pages/Speaker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./pages/NavBar";

export default function App() {
  return (
    <Router>
      <div className="container d-flex justify-content-center">
        <div className="App container p-4">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Conferences />
              <Speakers />
            </Route>
            <Route exact path="/conferences">
              <Conferences />
            </Route>
            <Route exact path="/speakers">
              <Speakers />
            </Route>
            <Route path="/speaker/:name">
              <Speaker />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
