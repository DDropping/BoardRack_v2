import React from "react";

// NOTE: the old import path was "@components/createpost/..." (lowercase p),
// which only resolved because macOS filesystems are case-insensitive.
import Step1 from "@components/createPost/step1/index.js";
import { renderWithProviders } from "../../../testUtils";

it("renders the step 1 form", () => {
  const { container } = renderWithProviders(<Step1 />);

  expect(container).not.toBeEmptyDOMElement();
});
