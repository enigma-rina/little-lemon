import React from "react";

function Card({ item }) {
    return (
        <div className="card">
            <img
                src={item?.image}
                alt=""
            />
            <h5 className="card-title">{item?.title}</h5>
            <div className="card-content">
                <p>{item?.body}</p>
            </div>
            <div className="card-action">{item?.action}</div>
        </div>
    );
}

export default Card;
