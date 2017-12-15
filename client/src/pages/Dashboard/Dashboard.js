import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const Dashboard = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Here is the main page of Homation!</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Col size="md-2">
        <div class="small-box bg-aqua">
          <div class="inner">
            <p>TEMPERATURE</p>
            <h3>50</h3>
          </div>
          <div class="icon">
            <i class="ion ion-bag"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </Col>
      <Col size="md-2">
        <div class="small-box bg-green">
          <div class="inner">
            <p>HUMIDITY</p>
            <h3>53<sup style={{"font-size": "20px"}}>%</sup></h3>
          </div>
          <div class="icon">
            <i class="ion ion-bag"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </Col>
      <Col size="md-2">
        <div class="small-box bg-yellow">
          <div class="inner">
            <p>LIGHTS</p>
            <h3>3</h3>
          </div>
          <div class="icon">
            <i class="ion ion-bag"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </Col>
      <Col size="md-2">
        <div class="small-box bg-red">
          <div class="inner">
            <p>DOORS</p>
            <h3>3</h3>
          </div>
          <div class="icon">
            <i class="ion ion-bag"></i>
          </div>
          <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
      </Col> 
    </Row>
  </Container>;

export default Dashboard;
