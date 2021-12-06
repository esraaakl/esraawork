import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/Store/Cart-Provider"


function App() {

  const [cartIsShown,setCartIsShown]=useState(false)
  const showcart=()=>{
    setCartIsShown(true)
  }
  const hideCart=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
    { cartIsShown && <Cart isClose={hideCart}/>}
      <Header isShown={showcart}></Header>
      <main>
    <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
