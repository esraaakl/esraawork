import React from "react";
import classes from "./Header.module.css"
import HeaderCartBtn from "./HeaderCartBtn";
import Logo from "../UI/logo";

const Header=(props)=>{
return <>
<header className={classes.header}>
    <h1> <Logo/>foodpanda</h1>
    <HeaderCartBtn isShown={props.isShown}></HeaderCartBtn>
</header>
<div className={classes['main-image']}>
    <img  alt="food"
    src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"/>
</div>

</>
}
export default Header;