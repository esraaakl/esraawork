import "./ExpenseForm.css"
import React ,{useState}from "react";


const ExpenseForm =(props)=> {

 

    const [enterdtitle,seteneterdTitle]=useState("")
    const [enteredAmount,setenterdAmount]=useState("")
    const [enterdDate,setenterdDate]=useState("")
  



//    const[userInput,setuserInput]= useState({
//         enterdtitle:"",
//         enteredAmount:"",
//         enterdDate:""
//     })
   const  titlechangeHandler=(e)=>{
       seteneterdTitle(e.target.value)
    // setuserInput((prevstate)=>{
    //     return {
    //         ...prevstate,
    //             enterdtitle: e.target.value
    // }
    // }
    // )
       
    };

    const amountChangedHandler=(e)=>{
        setenterdAmount(e.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
    
        // })

    }

    const dateChangedHandler=(e)=>{
        setenterdDate(e.target.value)
        // setuserInput({
        //     ...userInput,
        //     enterdDate: e.target.value
    
        // })

    }

    const submittingForm=(e)=>{
         e.preventDefault()
         const expenseData={
             title:enterdtitle,
             amount:+enteredAmount,
             date:new Date(enterdDate)
         }
        // console.log(expenseData)
        setenterdDate("")
        seteneterdTitle("")
        setenterdAmount("")
        props.onSaveexpenseData(expenseData)
        props.handlinghidingform()
    }



    return (  
        <form onSubmit={submittingForm}>
            <div className="new-expense__controls">  
            <div className="new-expense__control">
                <label>Title</label>
                <input value={enterdtitle} type="text"onChange={titlechangeHandler} ></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input  value ={enteredAmount}type="number" onChange={amountChangedHandler} min="0.01" step="0.01"></input>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input value={enterdDate} type="date" onChange={dateChangedHandler} min="2019-01-01" max="2022-12-31"></input>
            </div>

            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.handlinghidingform}> Cancel </button>
                <button type="submit" >  Add Expense</button>
               
            </div>
        </form>
    );
}

export default ExpenseForm;