import React from "react";

import Policy from "@components/footer/Policy";
import policyLinks from "../../../constants/policyLinks";
import { renderWithProviders, screen } from "../../testUtils";

it("renders a link for every policy", () => {
  renderWithProviders(<Policy />);

  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(policyLinks.length);
  policyLinks.forEach((link) => {
    expect(screen.getByRole("link", { name: link.title })).toHaveAttribute(
      "href",
      link.href
    );
  });
});
