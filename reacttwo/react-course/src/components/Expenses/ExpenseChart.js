import React from "react";
import Chart from "../charts/Chart";

const ExpenseChart =(props)=>{
    const dataPointes =[
        { label:"jan",value:0},
        { label:"fab",value:0},
        { label:"mar",value:0},
        { label:"apr",value:0},
        { label:"may",value:0},
        { label:"jun",value:0},
        { label:"jul",value:0},
        { label:"aug",value:0},
        { label:"sep",value:0},
        { label:"oct",value:0},
        { label:"nov",value:0},
        { label:"dec",value:0},
    ]
    for (let expenseitem of props.expenses){
        let month=expenseitem.date.getMonth()
        dataPointes[month].value+=expenseitem.amount
    }
    return(
        <Chart dataPointes={dataPointes}></Chart>
    )

}

export default ExpenseChart;