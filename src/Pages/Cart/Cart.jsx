import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../Context/Context';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css'


export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        
        <div className="cart">
            <div style={{ textAlign: "center", margin: "10px" }}>
                <h2>Your Cart Items</h2>
            </div>
            <div className="cartItem">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount < 0 ? <h2>Your Cart is Empty</h2> : <div className="checkout">
                 <p> Subtotal: Rs {totalAmount}</p>
                 <button onClick={() => navigate("/")}>Continue Shopping</button>
                 <button>Checkout</button>
             </div>
            }
        </div>

        
        
    )
}
