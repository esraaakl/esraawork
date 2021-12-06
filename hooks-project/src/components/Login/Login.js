import React, { useState ,useEffect,useReducer,useContext,useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../store/auth-context"
import Input from '../Input/Input';

const meialReducer=(state,action)=>{
  if(action.type==="email input"){
    return {value:action.val,
            isvalid:action.val.includes("@")}
  }
  if (action.type==="validating email")
  {
    return  {
      value:state.value,
      isvalid:state.value.includes("@")
    }
  
  }
  return {
    value:"",
    isvalid:false
  }

}

const passReducer=(state,action)=>{
  if(action.type==="pass input")
  return {
    value:action.val,
    isvalid:action.val.length>6
  }
  if(action.type==="validating pass")
  return{
    value:state.value,
    isvalid:state.value.length>6
  }

  return{
    value:"",
    isvalid:false
  }
}


const Login = (props) => {
const emailref=useRef()
const passref=useRef()
useEffect(()=>{console.log(emailref)},[])
 
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx=useContext(AuthContext)


  const [emailstate,dispatcgEmail]=useReducer(meialReducer,{
    value:"",
    isvalid:""
  })

  const [passstate,dispachpass]=useReducer(passReducer,{
    value:"",
    isvalid:""
  })
  console.log(passstate)



const {isvalid :emailvalied}=emailstate
const {isvalid:passvalied }= passstate




  useEffect(()=>{
    
    let handler= setTimeout(()=>{
   setFormIsValid(
    emailvalied && passvalied
      );
      console.log("efftect hook")
    },1000)
    return ()=>{
      console.log("cleanup")
      clearTimeout(handler)
    } 

  },[emailvalied,passvalied])

  const emailChangeHandler = (event) => {
    dispatcgEmail({type:"email input",val:event.target.value});
  
  };

  const passwordChangeHandler = (event) => {
    dispachpass({type:"pass input", val:event.target.value})
   
  };

  const validateEmailHandler = () => {

    dispatcgEmail({
      type:"validating email"
    })
  };

  const validatePasswordHandler = () => {
    dispachpass({
      type:"validating pass"
    })
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    {
      ctx.onLogin(emailstate.value, passstate.value);
    }
    else if(!emailvalied){
      emailref.current.activate()
    }else {
      passref.current.activate()
    }
   
  };
console.log("rendering")
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
           <Input id="email" 
           ref={emailref}
           type="email" 
           value={emailstate.value}
          label="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isvalid={emailstate.isvalid}/>
        {/* ......// */}
        <Input id="password" 
        ref={passref}
           type="password" 
           value={passstate.value}
          label="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isvalid={passstate.isvalid}/>
  
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}


export default Login
