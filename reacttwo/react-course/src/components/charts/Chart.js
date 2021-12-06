import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar"


const Chart =(props)=>{
    const datapointvalue=props.dataPointes.map(point=>point.value)
    const maxvalue=Math.max(...datapointvalue)
    return(
        <div className="chart">
            { props.dataPointes.map(point=>
                <ChartBar 
                value={point.value}
                key={point.label}
                maxValue={maxvalue}
                label={point.label}/>)}
        </div>
    )
}
export default Chart;