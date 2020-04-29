import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import NavItems from "@components/navbar/NavItems";
import { initializeStore } from "@store";

let initialState, store, wrapper;

describe("NavItems when user is not authenticated", () => {
  beforeEach(() => {
    initialState = {};
    store = initializeStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <NavItems />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has a create post link that will redirect to login", () => {
    const link = wrapper.find(".create-post-link-disabled");
    expect(link.length).toBe(1);
  });

  it("has a login link", () => {
    const link = wrapper.find(".login-link");
    expect(link.length).toBe(1);
  });

  it("has a register link", () => {
    const link = wrapper.find(".register-link");
    expect(link.length).toBe(1);
  });

  it("does not have a create post link", () => {
    const link = wrapper.find(".create-post-link");
    expect(link.length).toBe(0);
  });

  it("does not have a my account link", () => {
    const link = wrapper.find(".create-post-link");
    expect(link.length).toBe(0);
  });
});

describe("NavItems when user is authenticated", () => {
  beforeEach(() => {
    initialState = {
      auth: {
        token: "test_token",
        isAuthenticated: true,
        user: { username: "test_username", email: "test_email" },
      },
    };
    store = initializeStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <NavItems />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has a create post link", () => {
    const link = wrapper.find(".create-post-link");
    expect(link.length).toBe(1);
  });

  it("has a my account link", () => {
    const link = wrapper.find(".ant-dropdown-link");
    expect(link.length).toBe(1);
  });

  it("has a my account link", () => {
    const link = wrapper.find(".ant-dropdown-link");
    expect(link.text()).toEqual("test_username ");
  });

  it("does not have a create post link that will redirect to login", () => {
    const link = wrapper.find(".create-post-link-disabled");
    expect(link.length).toBe(0);
  });

  it("does not have a login link", () => {
    const link = wrapper.find(".login-link");
    expect(link.length).toBe(0);
  });

  it("does not have a register link", () => {
    const link = wrapper.find(".register-link");
    expect(link.length).toBe(0);
  });
});

describe("NavItems when user is authenticated but loadUser() failed", () => {
  beforeEach(() => {
    initialState = {
      auth: {
        token: "test_token",
        isAuthenticated: true,
      },
    };
    store = initializeStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <NavItems />
      </Provider>
    );
  });

  it("has a my account link", () => {
    const link = wrapper.find(".ant-dropdown-link");
    expect(link.text()).toEqual("My Account ");
  });
});
