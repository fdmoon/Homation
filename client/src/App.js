import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Chart from './components/chart/Chart'


const App = () =>
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route component={NoMatch} />
            </Switch>            
        </div>
    </Router>;

export default App;
