import React, { Component } from 'react'
import Plot from 'react-plotly.js';

class Chart extends Component {
    render(){
    return(    
    <div id="content">
    {this.props.charts.map((chart, key) => {
        return(    
            <Plot
                key={key}
                data={[
                {
                    x: chart.x,
                    y: chart.y,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'green'},
                    
                },                
                ]}
                layout={
                    {
                    width: 520, 
                    height: 420, 
                    plot_bgcolor:"#DEF1E7",
                    paper_bgcolor:"#DEF1E7",
                    title: "<b>" + chart.title + "</b>",
                    titlefont: {
                        family: 'Monospace',
                        size: 34,
                        color: '#333'
                    },
                    xaxis:{
                        title: "<b>x: block number</b> <br> Change: " + chart.percent + "% <br> Annualized: " + chart.annual + "%",
                        titlefont: {
                            family: 'Monospace',
                            size: 16,
                            color: '#333'
                        }
                    }, 
                    yaxis:{
                    title: '<b>y: share price</b>',
                    titlefont: {
                        family: 'Monospace',
                        size: 16,
                        color: '#333'
                    }
                }
                }
                }
            />                   
        )
    })} 
    </div>
    );
    }
}
export default Chart;