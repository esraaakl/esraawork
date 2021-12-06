import React,{useContext,useEffect,useState} from "react"
import classes from "./HeaderCartBtn.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/cart-context"


const HeaderCartBtn =(props)=>{
    const cartctx=useContext(CartContext);
    const {items}=cartctx
    const numofcart=cartctx.items.reduce((acc,item)=>{
        return acc+item.amount
    },0)
    const [btnhighlishted,setbtnhighlited]=useState(false)
    const btnclasses=`${classes.button} ${  btnhighlishted? classes.bump:""}`


useEffect(()=>{
setbtnhighlited(true)
console.log("adding")



const timer=setTimeout(
    ()=>{
        setbtnhighlited(false)
    }
,300)

return ()=>{
    clearTimeout(timer)
}
},[items])

return (
    <button onClick={props.isShown} className={btnclasses}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> Your cart</span>
        <span className={classes.badge}> {numofcart}</span>
    </button>
)
}
export default HeaderCartBtn