import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <img
                className="brand"
                src="/assets/logo.png"
                alt=""
            />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservation">Reservations</Link>
                </li>
                <li>
                    <Link to="/order">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
