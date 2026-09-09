import React from "react";

import Details from "@components/createPost/step1/Details";
import { renderWithProviders } from "../../../testUtils";

it("renders five antd rows of detail inputs", () => {
  const { container } = renderWithProviders(<Details />);

  expect(container.querySelectorAll(".ant-row")).toHaveLength(5);
});
