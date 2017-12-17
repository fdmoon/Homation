import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LightsDetail from "./pages/LightsDetail";
import DoorsDetail from "./pages/DoorsDetail";
import DoorsDetailEx from "./pages/DoorsDetailEx";
import Carousel from "./pages/Carousel";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/lights" component={LightsDetail} />
                <Route exact path="/doors" component={DoorsDetail} />
                <Route exact path="/doors-ex" component={DoorsDetailEx} />
                <Route exact path="/pptx" component={Carousel} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>;

export default App;

