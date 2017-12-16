import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Carousel from "./pages/Carousel";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/pptx" component={Carousel} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>;

export default App;

