import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="links">
                <li><Link to="/" style={{ color: "white", textDecoration: "none", margin: "10px" }}>Shop</Link></li>
                <li> <Link to="/cart">< ShoppingCart size={32} color="white" /></Link></li>
            </ul>

        </div>
    )
}

