import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { CtrlTable } from "../../components/AdminLTE";

import API from "../../utils/API";

class LightsDetail extends Component {
    state = {
        lights: [],
    };

    componentDidMount() {
        this.loadLights();
    }

    loadLights = () => {
        API.getSensorsByType("light")
            .then(res => {
                console.log(res.data);
                this.setState({ lights: res.data });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <CtrlTable title="Lights Status" args={this.state.lights}>
                        </CtrlTable>                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LightsDetail;

