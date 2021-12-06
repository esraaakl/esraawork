
import React ,{useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=> {
   
    const [formcheck,setformcheck]=useState(false)


    const handlingshowingform=()=>{
        setformcheck(true)

    }

    const handlinghidingform=()=>{
        setformcheck(false)
    }
    if (formcheck===false){
        return(
            <div className="new-expense ">
            <button onClick={handlingshowingform}>Add new expense</button>
        </div>
        )

    }
  


    const saveExpenseDataHandler=(enteredData)=>{
        const expenseData={
            ...enteredData,
            id: Math.random().toString()
        }
        console.log("hello from the parent")
        console.log(expenseData)
        props.onAddexpense(enteredData)

    }
    return ( 
<div className="new-expense ">
    <ExpenseForm 
    handlinghidingform={handlinghidingform}
    onSaveexpenseData={saveExpenseDataHandler}></ExpenseForm>
</div>
     );
}

export default NewExpense;