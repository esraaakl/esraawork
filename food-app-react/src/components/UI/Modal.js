import React from "react";
import classes from "./Modal.module.css"
import ReactDom from "react-dom";
const Backdrop=props=>{
    return (<div className={classes.backdrop} onClick={props.isClose} 
    >

    </div>)
}

const ModalOverlay=props=>{
    return(<div className={classes.modal}> 
    <div className={classes.content}>
        {props.children}
    </div>
    </div>)
}
const portal=document.getElementById("backdrop")
const Modal =props=>{
    return (
        <>
         {ReactDom.createPortal(<Backdrop isClose={props.isClose}/>,portal)}
         {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
        
        </>
       
    )

}

export default Modal;