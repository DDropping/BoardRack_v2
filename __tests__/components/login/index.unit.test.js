import React from "react";

import Login from "@components/login";
import { renderWithProviders, screen } from "../../testUtils";

it("stays closed when overlays.isLogin is false", () => {
  renderWithProviders(<Login />);

  expect(screen.queryByText("Login")).not.toBeInTheDocument();
});

it("renders the login dialog when overlays.isLogin is true", () => {
  renderWithProviders(<Login />, {
    initialState: { overlays: { isLogin: true, isRegister: false } },
  });

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  // "Login" appears twice: the modal title and the submit button.
  expect(document.querySelector(".ant-modal-title")).toHaveTextContent(
    "Login"
  );
});
