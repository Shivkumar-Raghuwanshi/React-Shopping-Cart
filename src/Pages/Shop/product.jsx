import React, { useContext } from 'react';
import './Shop.css';
import { ShopContext } from '../../Context/Context';

export const Product = (props) => {

    const { id, productName, price, productImage } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img className="image" src={productImage} alt='' />
            <div className="description">
                <h3>
                    {productName}
                </h3>
                <p>Rs {price}</p>
            </div>
            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>

        </div>
    )
}
