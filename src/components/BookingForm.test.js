import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import BookingForm from "./BookingForm";

import { updateTimes, initializeTimes } from "./Main";

describe("Reservation Form", () => {
    test("Form renders", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    });

    test("test updateTimes", () => {
        const INITIAL_STATE = [17, 18, 19, 20, 21, 22];
        const action = { type: "date_change", payload: new Date() };
        expect(initializeTimes()).toBeTruthy();
        expect(updateTimes(INITIAL_STATE, action)).toBeTruthy();
    });

    test("name input is required", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText, getByText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const nameInput = getByLabelText("Your Name");

        fireEvent.blur(nameInput);

        waitFor(() => {
            expect(getByText("Name is required")).toBeInTheDocument();
        });
    });

    test("name input is valid", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const nameInput = getByLabelText("Your Name");

        act(() => {
            fireEvent.change(nameInput, { target: { value: "John" } });
        });

        expect(nameInput.value).toBe("John");
    });

    test("reservation date input is required", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText, getByText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const resDateInput = getByLabelText("Choose date");

        act(() => {
            fireEvent.blur(resDateInput);
        });

        waitFor(() => {
            expect(
                getByText("Reservation Date is required")
            ).toBeInTheDocument();
        });
    });

    test("reservation date input is valid", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const resDateInput = getByLabelText("Choose date");

        act(() => {
            fireEvent.change(resDateInput, { target: { value: "2022-01-01" } });
        });

        expect(resDateInput.value).toBe("2022-01-01");
    });

    test("reservation time select is required", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText, getByText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const resTimeSelect = getByLabelText("Choose time");

        fireEvent.blur(resTimeSelect);

        waitFor(() => {
            expect(
                getByText("Reservation Time is required")
            ).toBeInTheDocument();
        });
    });

    test("reservation time select is valid", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const resTimeSelect = getByLabelText("Choose time");
        act(() => {
            fireEvent.change(resTimeSelect, { target: { value: "17" } });
        });

        expect(resTimeSelect.value).toBe("17");
    });

    test("number of guests input is required", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText, getByText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const numGuestsInput = getByLabelText("Number of guests");

        fireEvent.blur(numGuestsInput);

        waitFor(() => {
            expect(
                getByText("Number of guests is required")
            ).toBeInTheDocument();
        });
    });

    test("number of guests input is valid", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        const { getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const numGuestsInput = getByLabelText("Number of guests");

        act(() => {
            fireEvent.change(numGuestsInput, { target: { value: "2" } });
        });

        expect(numGuestsInput.value).toBe("2");
    });
});
