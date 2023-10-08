import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from './product';
export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h2>Shivkumar Raghuwanshi</h2>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}
