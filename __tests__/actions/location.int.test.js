import moxios from "moxios";
import Cookie from "js-cookie";

import * as actions from "@actions/location";
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

it("Loads location data into store by getLocationWithIp()", () => {
  const expectedState = {
    isLoading: false,
    isLocated: false,
    isLocatedWithIp: true,
    isMapLoading: false,
    location: {
      lat: "test_lat",
      lng: "test_lng",
      country: "test_country",
      state: "test_state",
      county: "test_county",
      city: "test_city",
      district: "test_district",
      postalCode: "test_postalCode",
      locationImage: "test_locationImage",
    },
  };

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState.location,
    });
  });

  return store.dispatch(actions.getLocationWithIp()).then(() => {
    const newState = store.getState();
    expect(newState.currentLocation).toStrictEqual(expectedState);
  });
});

it("Loads location data into store by handleLocationForm()", () => {
  const expectedState = {
    isLoading: false,
    isLocated: true,
    isLocatedWithIp: false,
    isMapLoading: false,
    location: {
      lat: "test_lat",
      lng: "test_lng",
      country: "test_country",
      state: "test_state",
      county: "test_county",
      city: "test_city",
      district: "test_district",
      postalCode: "test_postalCode",
      locationImage: "test_locationImage",
    },
  };

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState.location,
    });
  });

  return store
    .dispatch(actions.handleLocationForm("test value string"))
    .then(() => {
      const newState = store.getState();
      expect(newState.currentLocation).toStrictEqual(expectedState);
    });
});

it("Loads location data into store by handleGeolocation()", () => {
  const expectedState = {
    isLoading: false,
    isLocated: true,
    isLocatedWithIp: false,
    isMapLoading: false,
    location: {
      lat: "test_lat",
      lng: "test_lng",
      country: "test_country",
      state: "test_state",
      county: "test_county",
      city: "test_city",
      district: "test_district",
      postalCode: "test_postalCode",
      locationImage: "test_locationImage",
    },
  };

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState.location,
    });
  });

  return store
    .dispatch(actions.handleGeolocation({ lat: 10, lng: 10 }))
    .then(() => {
      const newState = store.getState();
      expect(newState.currentLocation).toStrictEqual(expectedState);
    });
});
