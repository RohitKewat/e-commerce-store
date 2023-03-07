import React, { useState } from "react";

const CartContext = React.createContext() ;

const CartProvider =(props)=>{
   
    const [cartData ,setCartdata] = useState([]);
    const addToCart =(data)=>{
        setCartdata([...cartData,data]) ;
    }

    return (
        <CartContext.Provider value={{cartData,addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext , CartProvider} ;