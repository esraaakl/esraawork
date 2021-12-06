import React ,{useImperativeHandle}from "react";
import classes from "./Input.module.css"

const Input =React.forwardRef((props,ref)=>{


// useImperativeHandle(ref,()=>{
//     return {
//         trial : ()=>{console.log("heelo from IIInput")}
//     }
// })
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>

        </div>
    )
})

export default Input;