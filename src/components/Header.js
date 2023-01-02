import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean Restaurant, focused
                        on trationalal recipes served with a modern twist
                    </p>
                    <Link
                        to="/reservation"
                        className="btn"
                    >
                        Reserve a table
                    </Link>
                </div>
                <div>
                    <img
                        src="/assets/restaurant food B.jpg"
                        alt=""
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
