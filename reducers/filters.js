import {
  TOGGLE_FILTERS,
  CHANGE_LAYOUT,
  UPDATE_PRICE_MAX,
  UPDATE_PRICE_MIN,
  UPDATE_ANY_PRICE,
  UPDATE_CONDITION,
} from "../actions/types";

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
    //toggle filter box
    case TOGGLE_FILTERS:
      return {
        ...state,
        isFiltersVisible: !state.isFiltersVisible,
      };
    //change layout view
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    //price range
    case UPDATE_PRICE_MAX:
      return {
        ...state,
        priceHigh: action.payload,
      };
    case UPDATE_PRICE_MIN:
      return {
        ...state,
        priceLow: action.payload,
      };
    case UPDATE_ANY_PRICE:
      return {
        ...state,
        anyPrice: action.payload,
      };
    //condition
    case UPDATE_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
