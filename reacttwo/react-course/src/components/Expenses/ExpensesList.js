import React from "react";
import "./ExpensesList.css"
import Expense from "./Expense"

const ExpensesList=(props)=>{
    
    if (props.filteredexpense.length===0 ){
    return <h2 className="expenses-list__fallback">No expense found</h2>
    }
return (
<ul className="expenses-list" > 
{
props.filteredexpense.map(item=><Expense
    title={item.title} 
    amount={item.amount}
    date={item.date}
    key={item.id} >
    </Expense>)
}

</ul>
    
)
}
export default ExpensesList;
