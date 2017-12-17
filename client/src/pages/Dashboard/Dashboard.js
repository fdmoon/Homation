import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { LayoutBox, StatBox } from "../../components/AdminLTE";
import { ToggleBtn } from "../../components/Button";

import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        sensors: {
            temps: [],
            humids: [],
            lights: [],
            doors: [],
            windows: []
        }
    };

    componentDidMount() {
        this.loadHouseSensors();
    }

    loadHouseSensors = () => {
        API.getHouses()
            .then(res => {
                console.log(res.data);

                let oneHouse = res.data[0];

                let sensors = {
                    temps: [],
                    humids: [],
                    lights: [],
                    doors: [],
                    windows: []
                };

                sensors.temps = [];
                sensors.humids = [];
                sensors.lights = [];
                sensors.doors = [];
                sensors.windows = [];
                for(let i=0; i<oneHouse.sensors.length; i++) {
                    if(oneHouse.sensors[i].type === "temperature") {
                        sensors.temps.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "humidity") {
                        sensors.humids.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "light") {
                        sensors.lights.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "door") {
                        sensors.doors.push(oneHouse.sensors[i]);
                    }
                    else if(oneHouse.sensors[i].type === "window") {
                        sensors.windows.push(oneHouse.sensors[i]);
                    }
                }
                
                this.setState({ sensors: sensors });
            })
            .catch(err => console.log(err));
    };

    // showLightsController = () => {
    //     var lightArray = [];
    //     for(let i=1; i<this.state.rooms.length; i++) {
    //         let tempArray = this.state.rooms[i].sensors.filter(item => item.type === "light");
    //         lightArray = lightArray.concat(tempArray);
    //     }
    //     return ( 
    //         lightArray.map(light => (
    //             <ToggleBtn name={light.name}>
    //                 {light.description}
    //             </ToggleBtn>
    //         ))
    //     );
    // }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">&nbsp;</Col>
                    <Col size="md-6">
                        <Row>
                            <LayoutBox title="Basic Information">
                                <Col size="md-3">
                                    <StatBox bgColor="bg-aqua" name="TEMPERATURE" ionName="ion-thermometer" link="#">
                                        <h3>{this.state.sensors.temps.length > 0 ? this.state.sensors.temps[0].value : 0}<sup style={{"fontSize": "20px"}}>&deg;F</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-green" name="HUMIDITY" ionName="ion-waterdrop" link="#">
                                        <h3>{this.state.sensors.humids.length > 0 ? this.state.sensors.humids[0].value : 0}<sup style={{"fontSize": "20px"}}>%</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-yellow" name="LIGHTS" ionName="ion-ios-lightbulb-outline" link="/lights">
                                        <h3>{this.state.sensors.lights.length}</h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-red" name="DOORS & WINDOWS" ionName="ion-ios-locked-outline" link="/doors">
                                        <h3>{this.state.sensors.doors.length + this.state.sensors.windows.length}</h3>
                                    </StatBox>
                                </Col> 
                            </LayoutBox>
                        </Row>
                        <Row>   
                            <Col size="md-6">
                                <LayoutBox title="Outdoor">
                                </LayoutBox>
                            </Col>
                            <Col size="md-6">
                                <LayoutBox title="Controller">
                                    <Col size="md-12">
                                        {/* {this.showLightsController()} */}
                                    </Col> 
                                </LayoutBox>
                            </Col> 
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;

