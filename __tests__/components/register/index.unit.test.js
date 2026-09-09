import React from "react";

import Register from "@components/register";
import { renderWithProviders, screen } from "../../testUtils";

it("stays closed when overlays.isRegister is false", () => {
  renderWithProviders(<Register />);

  expect(screen.queryByText("Register")).not.toBeInTheDocument();
});

it("renders the register dialog when overlays.isRegister is true", () => {
  renderWithProviders(<Register />, {
    initialState: { overlays: { isLogin: false, isRegister: true } },
  });

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  // "Register" appears twice: the modal title and the submit button.
  expect(document.querySelector(".ant-modal-title")).toHaveTextContent(
    "Register"
  );
});
