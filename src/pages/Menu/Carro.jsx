import React, {useContext} from "react";
import '../Menu/Carro.css';
import "../../assets/styles/header.css";
import { PRODUCTS } from "../../../products.js";
import {ShopContext} from '../../context/shop-context'
import {CartItem} from './cart-item.jsx'
import backArrow from '../../assets/imgs/imgCarro/back.png'


const Carro = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (

        <>  
            <div className="cart">
                <div className="titulo">
                    <h1>Articulos en tu carrito</h1>
                </div>

                <div className="cart-items">
                    {PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0){
                            return <CartItem data={product}/>
                        }
                    })}
                </div>

                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <a href="/Entradas"><button>Continuar Comprando</button></a>
                    <a href="#"><button>Checkout</button></a>
                </div>
            </div>
        </>
    );
    } 
export default Carro; 