import React from "react";
import { Link } from "react-router-dom";
import seal from 'C:/Users/Sujan kumar/Music/ecommerce platform(skmart)/src/assets/seal.jpg'

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
      <Link to='/' className="custom-link">
  <div className="title">
    <img src={seal} alt="SkMart Logo" className="logo" />
    <h2>SkMart</h2>
  </div>
</Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <div className="user-detail">Sign in/Sign up</div>
        </div>
          <Link to= '/cart'>
          <div className="cart">Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Laptops</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Men</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Women</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Appliances</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Refrigerator</li>
          </Link>
          <Link to="/books" className="custom-link">
            <li>Books</li>
          </Link>
          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
