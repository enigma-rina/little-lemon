import React from "react";
import BookingForm from "../components/BookingForm";

function Reservation({ availableTimes, dispatch, submitForm }) {
    return (
        <section
            className="container"
            style={{ flexDirection: "column" }}
        >
            <h2>Reserve your table</h2>
            <br />
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </section>
    );
}

export default Reservation;
