import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "../App";

describe("App", () => {
  test("should render title", () => {
    render(<App />);

    expect(screen.getByRole("heading", {
      name: "Market Data",
    })).toBeInTheDocument();
  });

  // TODO: Add more tests as you implement the Table component integration
});
