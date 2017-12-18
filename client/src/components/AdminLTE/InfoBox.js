import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css"

// ,
// temperature: String,
// skytext: String,
// humidity: String,
// winddisplay: String,
// imageUrl: String,
// forecast: Array


export const InfoBox = props =>
    <div className="info-box">
        <span className="info-box-icon bg-image"><img src={props.weather.imageUrl} /></span>

        <Row>
            <Col size="md-3">
                <div className="info-box-group">
                    <span className="info-box-number">{props.weather.skytext}</span>
                </div>
            </Col>
            <Col size="md-2">
                <div className="info-box-group">
                    <span className="info-box-text">Temperature</span>
                    <span className="info-box-number">{props.weather.temperature}&deg;F</span>
                </div>
            </Col>
            <Col size="md-2">
                <div className="info-box-group">
                    <span className="info-box-text">Humidity</span>
                    <span className="info-box-number">{props.weather.humidity}%</span>
                </div>
            </Col>
            <Col size="md-3">
                <div className="info-box-group">
                    <span className="info-box-text">Wind</span>
                    <span className="info-box-number">{props.weather.winddisplay}</span>
                </div>
            </Col>

        </Row>
    </div>;

