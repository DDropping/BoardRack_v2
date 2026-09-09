import React from "react";

import Footer from "@components/footer/index.js";
import { renderWithProviders, screen } from "../../testUtils";

it("renders the footer landmark with its link columns", () => {
  const { container } = renderWithProviders(<Footer />);

  expect(container).not.toBeEmptyDOMElement();
  expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
});
