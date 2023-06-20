import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("renders header element with correct class name", () => {
    render(<Header />);
    const headerElement = screen.getByRole("heading", {
      name: "Search Users Cards",
    });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("headerTitle");
  });
});
