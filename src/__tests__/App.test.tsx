import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "../App";

describe("App", () => {
  test("should render title", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: "Market Data",
    });
    expect(heading).toBeInTheDocument();
  });

  // TODO: Add more tests as you implement the Table component integration
});
