import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { SimTable } from "../../components/AdminLTE";

import API from "../../utils/API";

class DoorsDetail extends Component {
    state = {
        doors: [],
        windows: []

    };

    componentDidMount() {
        this.loadDoors();
        this.loadWindows();
    }

    loadDoors = () => {
        API.getSensorsByType("door")
            .then(res => {
                console.log(res.data);
                this.setState({ doors: res.data });
            })
            .catch(err => console.log(err));
    };

    loadWindows = () => {
        API.getSensorsByType("window")
            .then(res => {
                console.log(res.data);
                this.setState({ windows: res.data });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <SimTable title="Doors Status" args={this.state.doors}>
                        </SimTable>                        
                    </Col>
                    <Col size="md-6">
                        <SimTable title="Windows Status" args={this.state.windows}>
                        </SimTable>                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DoorsDetail;

