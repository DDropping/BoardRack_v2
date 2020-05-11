import { TOGGLE_FILTERS, CHANGE_LAYOUT } from "../actions/types";

const initialState = {
  isFiltersVisible: true,
  layout: "Gallery",
  sort: "Newest",
  distance: 25,
  anyPrice: true, // any price
  priceLow: null,
  priceHigh: null,
  boardType: [],
  condition: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTERS:
      return {
        ...state,
        isFiltersVisible: !state.isFiltersVisible,
      };
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
