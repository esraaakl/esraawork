import React,{useContext} from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../Store/cart-context"
import CartItem from "../CartItem/CartItem"
const Cart =props=>{

    const ctx=useContext(CartContext)
    const hasItems=ctx.items.length>0
const carItemRemoving=(id)=>{
    ctx.removeItem(id)

}

const carttemAddjandler=(item)=>{
ctx.addItem({...item ,amount:1})
}

    const cartitems=<ul>
        {ctx.items.map(item=>
           <CartItem 
           key={item.id}
           name={item.name}
           price={item.price}
           amount={item.amount}
            onRemove={carItemRemoving.bind(null,item.id)}
            onAdd={carttemAddjandler.bind(null,item)}
           ></CartItem>
                )        }
    </ul>

    const amount=`$${+ctx.totalAmount.toFixed(2)}`
    return (
        <Modal isClose={props.isClose} >
            {ctx.items.length>0 && cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{amount}</span>
            </div>

            <div className={classes.actions}>
                <button onClick={props.isClose} className={classes["button--alt"]}>Close</button>
                {hasItems && <button lassName={classes.button}>Order</button>} 
                
            </div>
        </Modal>
    )

}
export default Cart;