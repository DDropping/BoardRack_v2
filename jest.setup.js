// Enzyme has no official React 17/18 adapter and is effectively unmaintained,
// so the component tests now use React Testing Library.
import "@testing-library/jest-dom";

// jsdom implements neither of these, and antd v5 responsive components need
// both. Previously each test file redefined matchMedia for itself.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// react-modal calls Modal.setAppElement("#__next") at module scope
// (components/imageCrop/modal/index.js), which throws if the node is missing.
// Next renders that container in the real app; jsdom needs it created here,
// before any test module is imported.
const nextRoot = document.createElement("div");
nextRoot.setAttribute("id", "__next");
document.body.appendChild(nextRoot);

// next/router is not mounted in unit tests; components read query/pathname off
// it during render.
jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
  }),
}));
