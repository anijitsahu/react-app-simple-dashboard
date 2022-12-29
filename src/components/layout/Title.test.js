// npm imports
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// component import for testing
import Title from "./Title";

describe("Testing with Testing Library and Jest", () => {
  test("Testing title component", () => {
    render(<Title />);
    const titleDiv = screen.getByTestId("title");
    expect(titleDiv).toBeInTheDocument();
  });
});
