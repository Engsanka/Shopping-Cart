// import React, { useState } from "react";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";

const Header = () => {
  const {products} = useShop()
  return (
    <div className="menu">
      <Link className="logo" to="/">Reactfiy-App</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Link className="cart" to="/cart">
        <span>{ products.length }</span>
      </Link>
    </div>
  );
}

export default Header;
