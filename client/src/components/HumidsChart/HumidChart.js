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
          width={6}
          height={3}
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
                  { type:'linear', position:'left', id:"y-axis-0", ticks:{min:50, max:80, stepSize:5}},
                  { type:'linear', position:'right', id:"y-axis-1", ticks:{min:50, max:80, stepSize:5}}
              ]
          }
          }}
          />
      </div>
    )
  }
}

export default HumidChart;
