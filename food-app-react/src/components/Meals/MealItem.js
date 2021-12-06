import React ,{useContext} from "react";
import classes from "./MealItem.module.css"
import MealitemForm from"./MealItemForm"
import CartContext from "../../Store/cart-context";

const MealItem=(props)=>
{
    const ctx=useContext(CartContext)
    const price =`$${props.price.toFixed(2)}`
    const onaddtocart=(amount)=>{
        ctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return (
        <li className={classes.meal}>
            <div><h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>

            <div>
                <MealitemForm onaddtocart={onaddtocart} meal={props.meal} id ={props.id}/>
            </div>
            
            
        </li>
    )

}
export default MealItem;