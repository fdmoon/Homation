import React from "react";
import { Col, Row } from "../Grid";
import "./style.css";

export const InfoBox = props =>
    <div className="info-box">
        <span className="info-box-icon bg-image"><img src={props.weather.imageUrl} alt="" /></span>

        <Row>
            <Col size="md-2">
                <div className="info-box-group">
                    <span className="info-box-number">{props.weather.skytext}</span>
                    <br className="mobile" /><br className="mobile" />
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
            <Col size="md-3">&nbsp;</Col>
        </Row>
    </div>;

