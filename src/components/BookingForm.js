import React, { useEffect } from "react";
import moment from "moment";
import * as Yup from "yup";
import { useFormik } from "formik";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            resDate: moment(new Date()).format("YYYY-MM-DD"),
            resTime: 0,
            numGuests: 1,
            occasion: "Anniversary",
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            resDate: Yup.string().required("Reservation Date is required"),
            resTime: Yup.string().required("Reservation Time is required"),
            numGuests: Yup.number()
                .min(1, "A minimum of 1 guest is required")
                .required("Number of guests is required"),
            occasion: Yup.string().required("Occasion is required"),
        }),
    });

    useEffect(() => {
        dispatch({
            type: "date_change",
            payload: new Date(formik.values.resDate),
        });
    }, [formik.values.resDate]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(formik.values);
                formik.handleSubmit();
            }}
        >
            <label
                htmlFor="name"
                aria-controls="name"
            >
                Your Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                {...formik.getFieldProps("name")}
                onChange={(e) => formik.setFieldValue("name", e.target.value)}
                aria-required
                aria-invalid={formik.errors.name && formik.touched.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
            ) : null}

            <label
                htmlFor="res-date"
                aria-controls="res-date"
            >
                Choose date
            </label>
            <input
                type="date"
                id="res-date"
                name="resDate"
                value={formik.values.resDate}
                {...formik.getFieldProps("resDate")}
                onChange={(e) =>
                    formik.setFieldValue("resDate", e.target.value)
                }
                aria-required
                aria-invalid={formik.errors.resDate && formik.touched.resDate}
            />
            {formik.touched.resDate && formik.errors.resDate ? (
                <div className="error">{formik.errors.resDate}</div>
            ) : null}

            <label
                htmlFor="resTime"
                aria-controls="res-time"
            >
                Choose time
            </label>
            <select
                id="resTime"
                name="resTime"
                value={formik.values.resTime}
                {...formik.getFieldProps("resTime")}
                onChange={(e) =>
                    formik.setFieldValue("resTime", e.target.value)
                }
                aria-required
                aria-invalid={formik.errors.resTime && formik.touched.resTime}
            >
                <option value="0">Select Reservation Time</option>
                {availableTimes.map((t, i) => (
                    <option key={i}>{t}</option>
                ))}
            </select>
            {formik.touched.resTime && formik.errors.resTime ? (
                <div className="error">{formik.errors.resTime}</div>
            ) : null}

            <label
                htmlFor="guests"
                aria-controls="guests"
            >
                Number of guests
            </label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="numGuests"
                {...formik.getFieldProps("numGuests")}
                value={formik.values.numGuests}
                onChange={(e) =>
                    formik.setFieldValue("numGuests", e.target.value)
                }
                aria-required
                aria-invalid={
                    formik.errors.numGuests && formik.touched.numGuests
                }
            />
            {formik.touched.numGuests && formik.errors.numGuests ? (
                <div className="error">{formik.errors.numGuests}</div>
            ) : null}

            <label
                htmlFor="occasion"
                aria-controls="occasion"
            >
                Occasion
            </label>
            <select
                id="occasion"
                name="occasion"
                value={formik.values.occasion}
                {...formik.getFieldProps("occasion")}
                onChange={(e) =>
                    formik.setFieldValue("occasion", e.target.value)
                }
                aria-required
                aria-invalid={formik.errors.occasion && formik.touched.occasion}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
                <div className="error">{formik.errors.occasion}</div>
            ) : null}

            <br />
            <input
                type="submit"
                value="Make Your reservation"
                className="btn"
            />
        </form>
    );
}

export default BookingForm;
