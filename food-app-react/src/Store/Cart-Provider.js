import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultcartstate={
    items:[],
    totalAmount:0
}

const cartreducer=(state,action)=>{
    if(action.type==="ADD")
    {
        let updatedamount=state.totalAmount+(action.item.price*action.item.amount)

        const existingItemInCardindex=state.items.findIndex( item=>{
             return item.id===action.item.id
        })

        let  existingItemInCard;
        let updateditem;
        let updatedotems;
        if(existingItemInCardindex!== -1)
        {
            existingItemInCard=state.items[existingItemInCardindex]
            updateditem={...existingItemInCard,amount: existingItemInCard.amount+action.item.amount}
            updatedotems=[...state.items];
            updatedotems[existingItemInCardindex]=updateditem
            return{
                items:updatedotems,
                totalAmount:updatedamount
            }
        }
        return{
            items: state.items.concat(action.item) ,
            totalAmount:updatedamount
        }
       

        
    }else if (action.type==="REMOVE"){
        
        let  existingItemInCard;
        let updateditems;
        let  existingItemInCardindex=state.items.findIndex( item=>{
            return item.id===action.id
       })
       existingItemInCard=state.items[existingItemInCardindex]
       let updatedamount =state.totalAmount-existingItemInCard.price;
       if (existingItemInCard.amount===1)
       {
           updateditems=state.items.filter(item=>item.id!==action.id)
       }else {
         let updateditem={...existingItemInCard,amount:existingItemInCard.amount-1}
         updateditems=[...state.items]
         updateditems[existingItemInCardindex]=updateditem
       }
    return{
            items:updateditems ,
            totalAmount: updatedamount
        }

    }

return defaultcartstate
}

const CartProvider =props=>{

const[cartstate,cartstatedispatch]=useReducer(cartreducer,defaultcartstate) 

const addItemToCart=(item)=>{
cartstatedispatch({
    type:"ADD",
    item:item
})


}
const removeItemFromCart=(id)=>{
        cartstatedispatch({
            type:"REMOVE",
            id:id
        })

    }

    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    
    }
return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
}

export default CartProvider;
