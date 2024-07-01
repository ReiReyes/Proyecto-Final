import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const getCartFromLocalStorage = () => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  };

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCartFromLocalStorage());

    const getTotalCartAmount = () =>{
      let totalAmout = 0;
      for(const item in cartItems) {
        if(cartItems[item] > 0){
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmout += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmout;
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmount};

    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
