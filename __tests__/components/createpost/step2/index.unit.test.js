import React from "react";

import Step2 from "@components/createPost/step2/index.js";
import { renderWithProviders } from "../../../testUtils";

it("renders the step 2 form", () => {
  const { container } = renderWithProviders(<Step2 />);

  expect(container).not.toBeEmptyDOMElement();
});
