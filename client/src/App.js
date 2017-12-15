import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

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
