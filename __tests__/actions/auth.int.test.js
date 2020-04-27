import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import moxios from "moxios";
import Cookie from "js-cookie";

import baseUrl from "../../utils/baseUrl";
import * as actions from "@actions/auth";
import * as types from "@actions/types";
import { initializeStore } from "../../store";

const initialState = {};
let store = initializeStore(initialState);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it("Loads user data into store", () => {
  const expectedState = {
    _id: "test_id",
    role: "user",
    username: "test_username",
    email: "test_name",
  };

  jest.mock("js-cookie", () => jest.fn());
  Cookie.set("token", "123123123123123123");

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState,
    });
  });

  return store.dispatch(actions.loadUser()).then(() => {
    const newState = store.getState();
    expect(newState.auth.user).toBe(expectedState);
  });
});
