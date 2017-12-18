import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () =>
    <Container fluid    >
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <section className="content">
                        <div className="error-page">
                            <h2 className="headline text-yellow"> 404</h2>

                            <div className="error-content" style={{"paddingLeft": "50px"}}>
                                <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

                                <p>
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

