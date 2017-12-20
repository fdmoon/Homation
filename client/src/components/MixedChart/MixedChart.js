import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import "./style.css";

class MixedChart extends Component {
    // constructor(props) {
    //     super(props);
    // }

    static defaultProps = {
        displayTitle:true, 
        displayLegend:true,
        legendPosition:'top'
    }
    
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.props.chartData}
                    width={!this.props.chartData.ratio ? 100 : this.props.chartData.ratio.x}
                    height={!this.props.chartData.ratio ? 30 : this.props.chartData.ratio.y}
                    options={{
                        maintainAspectRatio: false, 
                        // title: { display:this.props.displayTitle, text:this.props.chartData.title, fontSize:18, fontColor: '#000'},
                        legend: { display:this.props.displayLegend, position:this.props.legendPosition},
                        scales: {
                            xAxes: [{ display:true, gridLines:{display: false} }],
                            yAxes: [
                                { type:'linear', position:'left', id:"y-axis-0", ticks:this.props.chartData.datasets[0].yAxisRange },
                                { type:'linear', position:'right', id:"y-axis-1", ticks:this.props.chartData.datasets[1].yAxisRange }
                            ]
                        }
                    }}
                />
            </div>
        );
    }
}

export default MixedChart;

