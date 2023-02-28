import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Error } from ".";

describe("Error tests", () => {
  test("should show Error title all the time", () => {
    render(<Error></Error>);

    expect(screen.getByText(/Erreur/)).toBeDefined();
  });
});
