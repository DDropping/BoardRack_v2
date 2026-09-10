import React from "react";

import Navbar from "@components/navbar";
import { renderWithProviders, screen } from "../../testUtils";

it("renders the navbar with its brand logo and nav items", () => {
  const { container } = renderWithProviders(<Navbar />);

  expect(container).not.toBeEmptyDOMElement();
  expect(screen.getAllByAltText(/boardrack/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText("Create Post").length).toBeGreaterThan(0);
});
