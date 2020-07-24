import {
  TOGGLE_FILTERS,
  CHANGE_LAYOUT,
  UPDATE_PRICE_MAX,
  UPDATE_PRICE_MIN,
  UPDATE_ANY_PRICE,
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_DISTANCE,
} from '../actions/types';

const initialState = {
  isFiltersVisible: true,
  layout: 'Gallery',
  sort: 'Newest',
  distance: 25,
  price: { any: true, min: null, max: null },
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
        price: {
          ...state.price,
          max: action.payload,
        },
      };
    case UPDATE_PRICE_MIN:
      return {
        ...state,
        price: {
          ...state.price,
          min: action.payload,
        },
      };
    case UPDATE_ANY_PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          any: action.payload,
        },
      };
    //condition
    case UPDATE_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };
    //board type
    case UPDATE_BOARD_TYPE:
      return {
        ...state,
        boardType: action.payload,
      };
    //distance
    case UPDATE_DISTANCE:
      return {
        ...state,
        distance: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
