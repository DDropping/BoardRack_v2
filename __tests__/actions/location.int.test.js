import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookie from "js-cookie";

import * as actions from "@actions/location";
import { initializeStore } from "../../store";

// moxios was archived in 2019 and never supported axios 1.x.
// axios-mock-adapter is the maintained equivalent.
let mock;

beforeEach(() => {
  mock = new MockAdapter(axios);
  Cookie.set("token", "123123123123123123");
});

afterEach(() => {
  mock.restore();
  Cookie.remove("token");
});

describe("Location services", () => {
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

  it("Loads location data into store by getLocationWithIp()", async () => {
    const store = initializeStore({});
    mock.onGet(/\/api\/location\/ip$/).reply(200, expectedLocation);

    await store.dispatch(actions.getLocationWithIp());

    expect(store.getState().currentLocation).toStrictEqual({
      isLoading: false,
      isLocated: false,
      isLocatedWithIp: true,
      isMapLoading: false,
      location: expectedLocation,
    });
  });

  it("Ignores an empty 204 body from getLocationWithIp()", async () => {
    const store = initializeStore({});
    mock.onGet(/\/api\/location\/ip$/).reply(204);

    await store.dispatch(actions.getLocationWithIp());

    // The route answers 204 when it cannot resolve a location. That must not
    // flip isLocatedWithIp while leaving the default coordinates in place.
    expect(store.getState().currentLocation.isLocatedWithIp).toBe(false);
  });

  it("Loads location data into store by handleLocationForm()", async () => {
    const store = initializeStore({});
    mock.onPost(/\/api\/location\/locationForm$/).reply(200, expectedLocation);

    await store.dispatch(actions.handleLocationForm("test value string"));

    expect(store.getState().currentLocation).toStrictEqual({
      isLoading: false,
      isLocated: true,
      isLocatedWithIp: false,
      isMapLoading: false,
      location: expectedLocation,
    });
  });

  it("Loads location data into store by handleGeolocation()", async () => {
    const store = initializeStore({});
    mock.onPost(/\/api\/location\/geo$/).reply(200, expectedLocation);

    await store.dispatch(actions.handleGeolocation({ lat: 10, lng: 10 }));

    expect(store.getState().currentLocation).toStrictEqual({
      isLoading: false,
      isLocated: true,
      isLocatedWithIp: false,
      isMapLoading: false,
      location: expectedLocation,
    });
  });
});

describe("Check to update user location", () => {
  it("Doesn't update the user's default location when it already matches", async () => {
    const store = initializeStore({
      auth: { user: { location: { lat: 10, lng: 10 } } },
    });

    await store.dispatch(
      actions.checkToUpdateUserLocation({ locationData: { lat: 10, lng: 10 } })
    );

    expect(store.getState().currentLocation).toStrictEqual({
      isLoading: false,
      isLocated: false,
      isLocatedWithIp: false,
      isMapLoading: false,
      // Unchanged from the reducer's initial state. (The previous version of
      // this assertion had drifted: it expected lat/lng null and postalCode
      // 94121, neither of which the reducer has ever produced.)
      location: {
        lat: 37.75288,
        lng: -122.49028,
        country: null,
        state: "CA",
        county: null,
        city: "San Francisco",
        district: null,
        postalCode: "94122",
        locationImage: null,
      },
    });
  });
});
