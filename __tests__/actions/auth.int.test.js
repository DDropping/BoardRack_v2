import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookie from "js-cookie";

import * as actions from "@actions/auth";
import { initializeStore } from "../../store";

// moxios was archived in 2019 and never supported axios 1.x.
// axios-mock-adapter is the maintained equivalent.
let mock;
let store;

beforeEach(() => {
  mock = new MockAdapter(axios);
  store = initializeStore({});
  Cookie.set("token", "123123123123123123");
});

afterEach(() => {
  mock.restore();
  Cookie.remove("token");
});

it("Loads user data into store by loadUserByCookie()", async () => {
  const expectedUser = {
    _id: "test_id",
    role: "user",
    username: "test_username",
    email: "test_name",
  };

  mock.onGet(/\/api\/auth\/accountData$/).reply(200, expectedUser);

  await store.dispatch(actions.loadUserByCookie());

  expect(store.getState().auth.user).toEqual(expectedUser);
});

it("Loads user data into store by loadUserByProps()", async () => {
  const user = {
    _id: "test_id",
    role: "user",
    username: "test_username",
    email: "test_name",
  };

  await store.dispatch(actions.loadUserByProps(user));

  expect(store.getState().auth.user).toEqual(user);
});
