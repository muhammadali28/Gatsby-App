import React from 'react';
import { Link } from 'gatsby';
import { style } from "../styles/header.module.css";

export default function Header() {
    return <div className={style}>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/product" >Product</Link>
    </div>;
}
