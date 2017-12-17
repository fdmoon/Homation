import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { CtrlTable } from "../../components/AdminLTE";

import API from "../../utils/API";

class LightsDetail extends Component {
    state = {
        timerId: 0,
        lights: []
    };

    componentDidMount() {
        this.loadLights();
        let timerId = setInterval(() => this.loadLights(), 1500);
        this.setState({ timerId: timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    loadLights = () => {
        API.getSensorsByType("light")
            .then(res => {
                console.log(res.data);
                this.setState({ lights: res.data });
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
            <Container>
                <Row>
                    <Col size="md-12">
                        <CtrlTable title="Lights Status" args={this.state.lights} handleControl={this.handleControl}>
                        </CtrlTable>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LightsDetail;

