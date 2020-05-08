import React from "react";
import Step2 from "@components/createpost/step2/index.js";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { initializeStore } from "@store";
import { Provider } from "react-redux";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const initialState = {};
const store = initializeStore(initialState);
const wrapper = mount(
  <Provider store={store}>
    <Step2 />
  </Provider>
);

it("matches snapshot", () => {
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});
