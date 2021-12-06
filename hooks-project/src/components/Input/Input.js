import React,{useEffect, useRef,useImperativeHandle} from "react";
import classes from "./Input.module.css"

const Input =React.forwardRef(

    (props,ref)=>{
        const inputRef= useRef()
    
        useEffect(()=>{
           console.log(inputRef.current)
        },[])
    
        const activate=()=>{
            inputRef.current.focus()
        }
        useImperativeHandle(ref,()=>{
            return {
                activate:activate
            }
        })
    
        return(
            <div
            className={`${classes.control} ${
              props.isvalid === false ? classes.invalid : ''
            }`}
          >
            <label htmlFor={props.id}>{props.label}</label>
            <input
            ref={inputRef}
              type={props.type}
              id={props.id}
              value={props.value}
              onChange={props.onChange}
              onBlur={props.onBlur}
              
            />
          </div>
        )
    })
export default Input;