import React from "react";

import AccountMenu from "@components/navbar/AccountMenu";
import navLinks from "../../../constants/navLinks";
import { renderWithProviders, screen } from "../../testUtils";

// AccountMenu renders navLinks filtered by `protected === isAuthenticated`,
// not the accountLinks constant.
const authedState = {
  auth: {
    token: "test_token",
    isAuthenticated: true,
    notifications: { messages: [] },
    user: { username: "test_username", email: "test_email" },
  },
};

it("renders the protected nav links when authenticated", () => {
  renderWithProviders(<AccountMenu />, { initialState: authedState });

  navLinks
    .filter((item) => item.protected === true)
    .forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
});

it("renders the public nav links when not authenticated", () => {
  renderWithProviders(<AccountMenu />);

  navLinks
    .filter((item) => item.protected === false)
    .forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
});
