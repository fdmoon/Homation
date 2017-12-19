import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { LayoutBox, StatBox, InfoBox } from "../../components/AdminLTE";
import MixedChart from "../../components/MixedChart";

import API from "../../utils/API";

class Dashboard extends Component {
    state = {
        timerId: 0,
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
        weather: {},
        usedPowerChart: { initial: true },
        forecastChart: { initial: true },
    };

    componentWillMount() {
        this.loadUsedPower();
        this.loadForecast([]);
    }

    componentDidMount() {
        this.loadHouseSensors();
        this.loadWeather();
        let timerId = setInterval(() => {
            this.loadHouseSensors();
            this.loadWeather();
        }, 3000);
        this.setState({ timerId: timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    loadHouseSensors = () => {
        API.getHouses()
            .then(res => {
                // console.log(res.data);

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
                // console.log(res.data);
                if(res.data.length > 0) {
                    this.setState({ weather: res.data[0] });
                    this.loadForecast(res.data[0].forecast);
                }
            })
            .catch(err => console.log(err));
    };

    loadUsedPower = () => {
        this.setState({
            usedPowerChart: {
                initial: false,
                title: "Monthly Energy Usage (kWh)",
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Used Power (kWh)',
                        data:[
                            440, 508, 418, 393, 569, 635, 1267, 1518, 1116, 869, 593, 522
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        yAxisID: 'y-axis-0',
                        yAxisRange: {min:0, max:2000, stepSize:500}
                    },
                    {
                        label: 'Avg. Temperature (\xB0F)',
                        data:[
                            55, 56, 65, 68, 72, 76, 84, 87, 84, 78, 70, 64
                        ],
                        type: 'line',
                        fill: false,
                        borderColor: '#8c8b8a',
                        backgroundColor: '#8c8b8a',
                        pointBorderColor: '#8c8b8a',
                        pointBackgroundColor: '#8c8b8a',
                        pointHoverBackgroundColor: '#8c8b8a',
                        pointHoverBorderColor: '#8c8b8a',
                        yAxisID: 'y-axis-1',
                        yAxisRange: {min:0, max:120, stepSize:30}
                    }
                ]
            }
        });
    }

    loadForecast = forecast => {
        // let labels = forecast.map(item => `${item.date} (${item.skytextday})`);
        let labels = forecast.map(item => `${item.date}`);
        let highs = forecast.map(item => item.high);
        let lows = forecast.map(item => item.low);

        this.setState({ 
            forecastChart: {
                initial: false,
                title: "Weather Forecast",
                labels: labels,
                datasets: [
                    {
                        label: 'High Temperature (\xB0F)',
                        data: highs,
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 0.8)',
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointBorderColor: 'rgba(255, 99, 132, 0.8)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
                        yAxisID: 'y-axis-0',
                        yAxisRange: {min:0, max:120, stepSize:30}
                    },
                    {
                        label: 'Low Temperature (\xB0F)',
                        data: lows,
                        type: 'line',
                        fill: false,
                        borderColor: 'rgba(54, 162, 235, 0.8)',
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointBorderColor: 'rgba(54, 162, 235, 0.8)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointHoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                        pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
                        yAxisID: 'y-axis-1',
                        yAxisRange: {min:0, max:120, stepSize:30}
                    }
                ]
            }
        });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <div style={{"textAlign": "center", "marginTop": "10px"}}>
                            <img src="/img/home-4room-plans.jpg" alt="" style={{"width": "55%"} }/>
                            <img src="/img/smarthome_img.png" alt="" style={{"width": "30%"}} />
                        </div>
                    </Col>
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
                </Row>
                <Row>
                    <Col size="md-6">
                        <LayoutBox title={this.state.usedPowerChart.title}>
                            <MixedChart chartData={this.state.usedPowerChart} />
                        </LayoutBox>
                    </Col>
                    <Col size="md-6">
                        <LayoutBox title={this.state.forecastChart.title}>
                            <MixedChart chartData={this.state.forecastChart} />
                        </LayoutBox>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;

