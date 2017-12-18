import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
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
          width={50}
          height={200}
          options={{maintainAspectRatio: false,
            title:{   display:this.props.displayTitle,   text:'Daily Usage', fontSize:30
          },
          legend:{
            display:this.props.displayLegend, position:this.props.legendPosition
          }
          }}
          />
      </div>
    )
  }
}

export default Chart;
