import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders little lemon", () => {
    render(<App />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
});
