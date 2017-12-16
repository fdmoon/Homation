import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { LayoutBox, StatBox } from "../../components/AdminLTE";
import { ToggleBtn, DeleteBtn } from "../../components/Button";

import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        rooms: [],
        isLocal: false
    };

    componentDidMount() {
        this.collectRooms();
    }

    collectRooms = () => {
        API.getRooms()
            .then(res => {
                console.log(res.data);
                this.setState({ rooms: res.data });
            })
            .catch(err => console.log(err));
    };

    totalLights = () => {
        var lights = 0;
        for(let i=1; i<this.state.rooms.length; i++) {
            for(let j=0; j<this.state.rooms[i].sensors.length; j++) {
                if(this.state.rooms[i].sensors[j].type === "light") {
                    lights += 1;
                }
            }
        }
        return lights;
    }

    totalDoors = () => {
        var doors = 0;
        for(let i=1; i<this.state.rooms.length; i++) {
            for(let j=0; j<this.state.rooms[i].sensors.length; j++) {
                if((this.state.rooms[i].sensors[j].type === "door") || (this.state.rooms[i].sensors[j].type === "window")) {
                    doors += 1;
                }
            }
        }
        return doors;
    }

    handleToggleSwitch = (id, value) => {
        console.log(id + ":" + value);
    }

    showLightsController = () => {
        var lightArray = [];
        for(let i=1; i<this.state.rooms.length; i++) {
            let tempArray = this.state.rooms[i].sensors.filter(item => item.type === "light");
            lightArray = lightArray.concat(tempArray);
        }
        return ( 
            lightArray.map(light => (
                <ToggleBtn name={light.name}>
                    {light.description}
                </ToggleBtn>
            ))
        );
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">&nbsp;</Col>
                    <Col size="md-6">
                        <Row>
                            <LayoutBox title="Basic Information">
                                <Col size="md-3">
                                    <StatBox bgColor="bg-aqua" name="TEMPERATURE" ionName="ion-thermometer">
                                        <h3>{this.state.rooms.length > 0 ? this.state.rooms[0].sensors[0].value : 0}</h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-green" name="HUMIDITY" ionName="ion-waterdrop">
                                        <h3>{this.state.rooms.length > 0 ? this.state.rooms[0].sensors[2].value : 0}<sup style={{"font-size": "20px"}}>%</sup></h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-yellow" name="LIGHTS" ionName="ion-ios-lightbulb-outline">
                                        <h3>{this.totalLights()}</h3>
                                    </StatBox>
                                </Col>
                                <Col size="md-3">
                                    <StatBox bgColor="bg-red" name="DOORS & WINDOWS" ionName="ion-ios-locked-outline">
                                        <h3>{this.totalDoors()}</h3>
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
                                        {this.showLightsController()}
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

