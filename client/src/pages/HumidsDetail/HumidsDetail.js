import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { SimTable } from "../../components/AdminLTE";
import {Bar, Line, Pie} from 'react-chartjs-2';
import HumidChart from "../../components/HumidsChart";



class HumidsDetail extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //ajax calls here and fill state with data that comes in
    this.setState({
      chartData:{
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Humidity',
            data:[
              55, 60, 64, 58, 69, 53, 70
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          },
          {
              label: 'Indoor Temperature',
              data: [65,67,70,63,74,60,71],
              type: 'line',
              fill: false,
              borderColor: 'rgba(54, 162, 235, 0.8)',
              backgroundColor: 'rgba(54, 162, 235, 0.8)',
              pointBorderColor: 'rgba(54, 162, 235, 0.8)',
              pointBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              pointHoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
              pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)'
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <HumidChart chartData={this.state.chartData} />
      </div>
    );
  }
}


export default HumidsDetail;
