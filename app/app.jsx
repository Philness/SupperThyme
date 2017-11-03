import React from "react";
import ReactDOM from "react-dom";
// import { Route, Router, IndexRoute, HashHistory } from "react-router";

// What are you rendering?  Where are you rendering it?
ReactDOM.render(
  <h2> Don&apost be nervous! You can do it! </h2>,
  /*
    Once Main components are made, this will be un-dummied
    <Router history = {HashHistory}>
        <Route path = "/" component = {Main}>
        </Route>
    </Router>
    */
  document.getElementById("app")
);
