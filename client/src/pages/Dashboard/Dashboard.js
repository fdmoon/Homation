import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { LayoutBox, StatBox, InfoBox } from "../../components/AdminLTE";

import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        sensors: {
            thermos: [],
            humids: [],
            lights: [],
            onlights: 0,
            doors: [],
            ondoors: 0,
            windows: [],
            onwindows: 0
        },
        weather: {}
    };

    componentDidMount() {
        this.loadHouseSensors();
        this.loadWeather();
    }

    loadHouseSensors = () => {
        API.getHouses()
            .then(res => {
                console.log(res.data);

                let oneHouse = res.data[0];

                let sensors = {
                    thermos: [],
                    humids: [],
                    lights: [],
                    onlights: 0,
                    doors: [],
                    ondoors: 0,
                    windows: [],
                    onwindows: 0
                };

                for(let i=0; i<oneHouse.sensors.length; i++) {
                    if(oneHouse.sensors[i].type === "temperature") {
                        sensors.thermos.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "humidity") {
                        sensors.humids.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "light") {
                        sensors.lights.push(oneHouse.sensors[i]);
                        if(oneHouse.sensors[i].value === 1) {
                            sensors.onlights += 1;
                        }
                    }
                    else if(oneHouse.sensors[i].type === "door") {
                        sensors.doors.push(oneHouse.sensors[i]);
                        if(oneHouse.sensors[i].value === 1) {
                            sensors.ondoors += 1;
                        }
                    }
                    else if(oneHouse.sensors[i].type === "window") {
                        sensors.windows.push(oneHouse.sensors[i]);
                        if(oneHouse.sensors[i].value === 1) {
                            sensors.onwindows += 1;
                        }
                    }
                }
                
                this.setState({ sensors: sensors });
            })
            .catch(err => console.log(err));
    };

    loadWeather = () => {
        API.getWeather()
            .then(res => {
                console.log(res.data);
                if(res.data.length > 0) {
                    this.setState({ weather: res.data[0] });
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-1">&nbsp;</Col>
                    <Col size="md-3">
                        <img src="/img/smarthome_img.png" style={{"width": "100%"}}/>
                    </Col>
                    <Col size="md-1">&nbsp;</Col>
                    <Col size="md-6">
                        <Row>
                            <LayoutBox title="Basic Information">
                                <Col size="md-3">
                                    <StatBox bgColor="bg-aqua" name="TEMPERATURE" ionName="ion-thermometer" link="/thermos">
                                        <h3>{this.state.sensors.thermos.length > 0 ? this.state.sensors.thermos[0].value : 0}<sup style={{"fontSize": "20px"}}>&deg;F</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-green" name="HUMIDITY" ionName="ion-waterdrop" link="/humids">
                                        <h3>{this.state.sensors.humids.length > 0 ? this.state.sensors.humids[0].value : 0}<sup style={{"fontSize": "20px"}}>%</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-yellow" name="LIGHTS" ionName="ion-ios-lightbulb-outline" link="/lights">
                                        <h3>{this.state.sensors.lights.length}<sup style={{"fontSize": "20px"}}>({this.state.sensors.onlights})</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-red" name="DOORS & WINDOWS" ionName="ion-ios-locked-outline" link="/doors">
                                        <h3>
                                            {this.state.sensors.doors.length + this.state.sensors.windows.length}
                                            <sup style={{"fontSize": "20px"}}>({this.state.sensors.ondoors + this.state.sensors.onwindows})</sup>
                                        </h3>
                                    </StatBox>
                                </Col> 
                            </LayoutBox>
                        </Row>
                        <Row>
                            <LayoutBox title={`Weather at ${this.state.weather.name} (${this.state.weather.date} ${this.state.weather.day} ${this.state.weather.observationtime})`}>
                                <Col size="md-12">
                                    <InfoBox weather={this.state.weather} />
                                </Col>
                            </LayoutBox>
                        </Row>
                        
                    </Col>
                    <Col size="md-1">&nbsp;</Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;

