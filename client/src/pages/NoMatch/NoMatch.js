import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";

const NoMatch = () =>
    <Container fluid    >
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <section className="content content-ex">
                        <div className="error-page">
                            <h2 className="headline text-yellow" style={{"marginTop": "0"}}> 404</h2>

                            <div className="error-content error-content-ex">
                                <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

                                <p className="error-text">
                                    We could not find the page you were looking for.
                                    Meanwhile, you may <a href="/">return to dashboard</a> or try using the search form.
                                </p>
                            </div>
                        </div>
                    </section>
                </Jumbotron>
            </Col>
        </Row>
    </Container>;

export default NoMatch;

