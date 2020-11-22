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
                    plot_bgcolor:"#FFFCE6",
                    paper_bgcolor:"#FFFCE6",
                    title: "<b>" + chart.title + "</b>",
                    titlefont: {
                        family: 'Monospace',
                        size: 34,
                        color: '#333'
                    },
                    xaxis:{
                        title: "<b>x: block number</b>" + chart.percent + chart.annual,
                        titlefont: {
                            family: 'Monospace',
                            size: 16,
                            color: '#333'
                        }
                    }, 
                    yaxis:{
                    title: chart.ytitle,
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