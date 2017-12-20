import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class HumidChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true, displayLegend:true,
    legentPosition:'right'
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={5}
          height={2}
          options={{maintainAspectRatio: false,
            title:{   display:this.props.displayTitle,   text:'Weekly Humidity (%)', fontSize:30
          },
          legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition
          },
          scales: {
              xAxes: [{ display:true, gridLines:{display: false} }],
              yAxes: [
                  { type:'linear', position:'left', id:"y-axis-0"},
                  { type:'linear', position:'right', id:"y-axis-1"}
              ]
          }
          }}
          />
      </div>
    )
  }
}

export default HumidChart;
