import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { CtrlTable } from "../../components/AdminLTE";

import API from "../../utils/API";

class DoorsDetailEx extends Component {
    state = {
        timerId: 0,
        doors: [],
        windows: []
    };

    componentDidMount() {
        this.loadDoors();
        this.loadWindows();
        let timerId = setInterval(() => {
            this.loadDoors();
            this.loadWindows();
        }, 1500);
        this.setState({ timerId: timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    loadDoors = () => {
        API.getSensorsByType("door")
            .then(res => {
                console.log(res.data);
                this.setState((prevState, props) => { 
                    return { doors: res.data };
                });
            })
            .catch(err => console.log(err));
    };

    loadWindows = () => {
        API.getSensorsByType("window")
            .then(res => {
                console.log(res.data);
                this.setState((prevState, props) => { 
                    return { windows: res.data };
                }); 
            })
            .catch(err => console.log(err));
    };

    handleControl = (id, toggle) => {
        API.updateSensor(id, { value: toggle ? 1 : 0 })
            .then(res => {
                console.log(res.data);
                
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <CtrlTable title="Doors Status" args={this.state.doors} handleControl={this.handleControl} />
                    </Col>
                    <Col size="md-6">
                        <CtrlTable title="Windows Status" args={this.state.windows} handleControl={this.handleControl} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DoorsDetailEx;

