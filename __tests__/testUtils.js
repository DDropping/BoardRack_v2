import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";

import { initializeStore } from "../store";
import { theme, antdTheme } from "../pages/_app";

// Mirrors the provider stack in pages/_app.js so components under test see the
// same theme and store context they get in the real app.
export function renderWithProviders(ui, { initialState = {} } = {}) {
  const store = initializeStore(initialState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
  return { store, ...render(ui, { wrapper: Wrapper }) };
}

export * from "@testing-library/react";
