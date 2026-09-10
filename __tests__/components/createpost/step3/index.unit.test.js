import React from "react";

import Step3 from "@components/createPost/step3/index.js";
import { renderWithProviders } from "../../../testUtils";

it("renders the step 3 form", () => {
  const { container } = renderWithProviders(<Step3 />);

  expect(container).not.toBeEmptyDOMElement();
});
