import moxios from "moxios";
import Cookie from "js-cookie";

import * as actions from "@actions/auth";
import { initializeStore } from "../../store";

const initialState = {};
let store = initializeStore(initialState);

beforeEach(() => {
  moxios.install();
  Cookie.set("token", "123123123123123123");
});

afterEach(() => {
  moxios.uninstall();
  Cookie.remove("token");
});

it("Loads user data into store by loadUserByCookie()", () => {
  const expectedState = {
    _id: "test_id",
    role: "user",
    username: "test_username",
    email: "test_name",
  };

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState,
    });
  });

  return store.dispatch(actions.loadUserByCookie()).then(() => {
    const newState = store.getState();
    expect(newState.auth.user).toBe(expectedState);
  });
});

it("Loads user data into store by loadUserByProps", () => {
  const user = {
    _id: "test_id",
    role: "user",
    username: "test_username",
    email: "test_name",
  };

  return store.dispatch(actions.loadUserByProps(user)).then(() => {
    const newState = store.getState();
    expect(newState.auth.user).toBe(user);
  });
});
