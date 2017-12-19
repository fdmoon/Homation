import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LightsDetail from "./pages/LightsDetail";
import DoorsDetail from "./pages/DoorsDetail";
import DoorsDetailEx from "./pages/DoorsDetailEx";
import Carousel from "./pages/Carousel";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
    let style = {
        // "background": "url(/img/???.jpg) no-repeat",
        // "backgroundSize": "100%",
        // "backgroundAttachment": "fixed",
        "minHeight": "calc(100vh - 50px)"  /* 50px is height of footer */
    };

    return (
        <Router>
            <div>
                <div style={style}>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/lights" component={LightsDetail} />
                        <Route exact path="/doors" component={DoorsDetail} />
                        <Route exact path="/doors-ex" component={DoorsDetailEx} />
                        <Route exact path="/about" component={Carousel} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

