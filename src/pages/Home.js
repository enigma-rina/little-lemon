import React from "react";
import { Link } from "react-router-dom";
import Specials from "../components/Specials";

function Home() {
    return (
        <section className="home container">
            <h2>This weeks specials!</h2>

            <div>
                <Link
                    to="/order"
                    className="btn"
                >
                    Order Online
                </Link>
            </div>

            <Specials />
        </section>
    );
}

export default Home;
