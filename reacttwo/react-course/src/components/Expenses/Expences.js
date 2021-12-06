import "./Expences.css"

import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import React,{useState} from "react"
import ExpensesList from "./ExpensesList"
import ExpenseChart from "./ExpenseChart"



function Expenses(props) {

const [filterselected,setFilterSelected]=useState("All")
const filteredexpense=props.expenses.filter(item=> item.date.getFullYear().toString() ===filterselected || filterselected==="All")

const onchangefilter=(selectedFilrer)=>{
  const selectedFilter=selectedFilrer
 setFilterSelected(selectedFilter)
 console.log(filteredexpense)
}




    return (

      
   
      <Card className="expenses">
       <ExpensesFilter selected={filterselected} onchangefilter={onchangefilter} ></ExpensesFilter>
       <ExpenseChart expenses={filteredexpense} />
       <ExpensesList filteredexpense={filteredexpense}></ExpensesList>
      </Card>
    

  
    );
    }
  
  export default Expenses;




















