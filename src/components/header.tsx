import React from 'react';
import { Link } from 'gatsby';
import styles from "./header.module.css";

export default function Header() {
    return <div className={styles.header}>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
    </div>;
}
