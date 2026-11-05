import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import "./i18n/config";

describe("App", () => {
  it("renders the home page title", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/a modern react \+ typescript website/i)).toBeInTheDocument();
  });
});
