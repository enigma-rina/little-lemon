import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import OrderOnline from "../pages/OrderOnline";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import BookingConfirmed from "../pages/BookingConfirmed";

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case "date_change":
            const times = fetchAPI(action.payload);
            return times;
    }
};

const initializeTimes = (date = new Date()) => {
    const times = fetchAPI(date);
    return times;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/reservation_confirmed");
        }
    };

    return (
        <main className="">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/menu"
                    element={<Menu />}
                />
                <Route
                    path="/order"
                    element={<OrderOnline />}
                />
                <Route
                    path="/reservation"
                    element={
                        <Reservation
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route
                    path="reservation_confirmed"
                    element={<BookingConfirmed />}
                />
            </Routes>
        </main>
    );
}

export default Main;
export { updateTimes, initializeTimes };
