import React from "react";
import userEvent from "@testing-library/user-event";

import NavItems from "@components/navbar/NavItems";
import { TOGGLE_LOGIN, TOGGLE_REGISTER } from "@actions/types";
import { renderWithProviders, screen } from "../../testUtils";

// NOTE: the previous version of this file queried .create-post-link,
// .login-link and .register-link, none of which exist in the component. These
// assert against what NavItems actually renders.

// A preloaded slice replaces the reducer's default wholesale, so it has to
// carry `notifications` the same way the real reducer initialises it.
const authedState = {
  auth: {
    token: "test_token",
    isAuthenticated: true,
    notifications: { messages: [] },
    user: { username: "test_username", email: "test_email" },
  },
};

describe("when the user is not authenticated", () => {
  it("shows Create Post, Login and Register", () => {
    renderWithProviders(<NavItems />);

    expect(screen.getByText("Create Post")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  it("shows no account dropdown", () => {
    const { container } = renderWithProviders(<NavItems />);

    expect(container.querySelector(".ant-dropdown-link")).toBeNull();
    expect(screen.queryByText("My Account")).not.toBeInTheDocument();
  });

  it("opens the login modal instead of navigating to Create Post", async () => {
    const { store } = renderWithProviders(<NavItems />);

    await userEvent.click(screen.getByText("Create Post"));

    expect(store.getState().overlays.isLogin).toBe(true);
  });

  it("dispatches TOGGLE_REGISTER when Register is clicked", async () => {
    const { store } = renderWithProviders(<NavItems />);

    await userEvent.click(screen.getByText("Register"));

    expect(store.getState().overlays.isRegister).toBe(true);
  });
});

describe("when the user is authenticated", () => {
  it("shows the username in the account dropdown", () => {
    const { container } = renderWithProviders(<NavItems />, {
      initialState: authedState,
    });

    expect(container.querySelector(".ant-dropdown-link")).toHaveTextContent(
      "test_username"
    );
  });

  it("links Create Post to /createpost rather than opening the modal", () => {
    renderWithProviders(<NavItems />, { initialState: authedState });

    expect(screen.getByRole("link", { name: /create post/i })).toHaveAttribute(
      "href",
      "/createpost"
    );
  });

  it("hides the Login and Register items", () => {
    renderWithProviders(<NavItems />, { initialState: authedState });

    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Register")).not.toBeInTheDocument();
  });
});

describe("when authenticated but the user record failed to load", () => {
  it('falls back to "My Account"', () => {
    const { container } = renderWithProviders(<NavItems />, {
      initialState: {
        auth: {
          token: "test_token",
          isAuthenticated: true,
          notifications: { messages: [] },
        },
      },
    });

    expect(container.querySelector(".ant-dropdown-link")).toHaveTextContent(
      "My Account"
    );
  });
});
