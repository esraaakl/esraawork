import React, { useContext ,useRef,useState} from "react";
import classes from"./MealItemForm.module.css"
import Input from "../UI/Input";



const MealitemForm =props=>{

    const [amountvalid,setamountvalid]=useState(" ")

    const inputref=useRef()
    // let ctx=useContext(CartContext)
    const submutHandler=(e)=>{
       e.preventDefault();
       
       const eneterdAmount=inputref.current.value
       const enterdamountNum=+eneterdAmount
       if(eneterdAmount.trim().length===0 || enterdamountNum<1 || enterdamountNum>5)
       {
           setamountvalid(false)
           return;
       }
       setamountvalid(true)
       console.log(props.meal ,eneterdAmount )
       props.onaddtocart(enterdamountNum)
       

    }


return(
    <form onSubmit={submutHandler} className={classes.form}> 
        <Input
        ref={inputref}
        label="Amount"
        input={
           {
               id:"amount"+props.id,
               type:"number",
               min:"1",
               max:"5",
               step:"1",
               defaultValue:"1"
           } 
        }
        />
        <button>Add +</button>
        {!amountvalid && <p>enter valid amount</p> }
    </form>
)
}
export default MealitemForm