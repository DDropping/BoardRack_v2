import moxios from "moxios";
import Cookie from "js-cookie";

import * as actions from "@actions/location";
import { initializeStore } from "../../store";

beforeEach(() => {
  moxios.install();
  Cookie.set("token", "123123123123123123");
});

afterEach(() => {
  moxios.uninstall();
  Cookie.remove("token");
});

describe("Location services", () => {
  const initialState = {};
  let store = initializeStore(initialState);

  const expectedLocation = {
    lat: "test_lat",
    lng: "test_lng",
    country: "test_country",
    state: "test_state",
    county: "test_county",
    city: "test_city",
    district: "test_district",
    postalCode: "test_postalCode",
    locationImage: "test_locationImage",
  };

  it("Loads location data into store by getLocationWithIp()", () => {
    const expectedState = {
      isLoading: false,
      isLocated: false,
      isLocatedWithIp: true,
      isMapLoading: false,
      location: expectedLocation,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedLocation,
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
      location: expectedLocation,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedLocation,
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
      location: expectedLocation,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedLocation,
      });
    });

    return store
      .dispatch(actions.handleGeolocation({ lat: 10, lng: 10 }))
      .then(() => {
        const newState = store.getState();
        expect(newState.currentLocation).toStrictEqual(expectedState);
      });
  });
});

describe("Check to update user location", () => {
  const initialState = {
    auth: {
      user: {
        location: {
          lat: 10,
          lng: 10,
        },
      },
    },
  };
  let store = initializeStore(initialState);

  const expectedState = {
    isLoading: false,
    isLocated: false,
    isLocatedWithIp: false,
    isMapLoading: false,
    location: {
      lat: null,
      lng: null,
      country: null,
      state: "CA",
      county: null,
      city: "San Francisco",
      district: null,
      postalCode: "94121",
      locationImage: null,
    },
  };

  it("Dont update user's default location with checkToUpdateUserLocation()", () => {
    return store
      .dispatch(
        actions.checkToUpdateUserLocation({
          locationData: { lat: 10, lng: 10 },
        })
      )
      .then(() => {
        const newState = store.getState();
        expect(newState.currentLocation).toStrictEqual(expectedState);
      });
  });
});
