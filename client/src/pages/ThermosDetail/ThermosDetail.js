import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { LayoutBox } from "../../components/AdminLTE";
import MixedChart from "../../components/MixedChart";
import { Input } from "../../components/Form";
import ToggleBtn from "../../components/ToggleBtn";

class ThermosDetail extends Component {
    constructor() {
        super();

        this.state = {
            timerId: 0,
            chartData: {},
            target: 64,
            turnOn: 0
        }

        this.data = {
            num: 60, 
            realtarget: this.state.target,
            temperature: this.state.target,
            labels: [],
            targets: [],
            values: []
        }

        for(let i=this.data.num-1; i>=0; i--) {
            (i === 0) ? 
                this.data.labels.push(`t`) : this.data.labels.push(`t-${i}s`);
            this.data.targets.push(this.data.target);
            this.data.values.push(this.data.temperature);
        }

        this.toggle = false;
    }

    componentWillMount(){
        this.getChartData();
    }

    componentDidMount() {
        let timerId = setInterval(() => {
            this.getChartData();
        }, 1000);
        this.setState({ timerId: timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    getChartData = () => {
        if((this.state.target > 20) && (this.state.target < 120)) {
            this.data.realtarget = this.state.target;
        }

        this.data.targets = this.data.targets.map(item => {
            let retData = this.data.realtarget;
            if(this.toggle) {
                retData = parseInt(this.data.realtarget) + 0.01;
            }
            else {
                retData = parseInt(this.data.realtarget) - 0.01;
            }
            return retData;
        });

        if(this.toggle) {
            this.toggle = false;
        }
        else {
            this.toggle = true;
        }

        this.data.values.shift();
        if(this.state.turnOn === 1) {
            this.data.temperature = (0.95 * this.data.temperature) + (0.05 * this.data.realtarget);
        }
        this.data.values.push(this.data.temperature);

        this.setState({
            chartData: {
                title: "Temperature (\xB0F)",
                ratio: {x: 100, y: 40},
                labels: this.data.labels,
                datasets: [
                    {
                        label: 'Target (\xB0F)',
                        data: this.data.targets,
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 0.8)',
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointBorderColor: 'rgba(255, 99, 132, 0.8)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
                        yAxisID: 'y-axis-0',
                        yAxisRange: {min:20, max:120, stepSize:25}
                    },
                    {
                        label: 'Current (\xB0F)',
                        data: this.data.values,                        
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(54, 162, 235, 0.8)',
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointBorderColor: 'rgba(54, 162, 235, 0.8)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointHoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
                        yAxisID: 'y-axis-1',
                        yAxisRange: {min:20, max:120, stepSize:25}
                    }
                ]
            }
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleControl = (id, checked) => {
        this.setState({ turnOn: checked ? 1 : 0});
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <LayoutBox title={this.state.chartData.title}>
                            <MixedChart chartData={this.state.chartData} />
                        </LayoutBox>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <LayoutBox title="Simulation (Target Temperature)">
                            <Col size="md-3">
                                <Input
                                    value={this.state.target}
                                    onChange={this.handleInputChange}
                                    name="target"
                                    placeholder=""
                                />
                            </Col>
                            <Col size="md-3">
                                <ToggleBtn id="AC" checked={this.state.turnOn} handleControl={this.handleControl} />
                            </Col>
                        </LayoutBox>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default ThermosDetail;
