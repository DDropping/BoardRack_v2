import {
  TOGGLE_FILTERS,
  CHANGE_LAYOUT,
  UPDATE_PRICE_MAX,
  UPDATE_PRICE_MIN,
  UPDATE_ANY_PRICE,
  UPDATE_CONDITION,
  UPDATE_BOARD_TYPE,
  UPDATE_DISTANCE,
  UPDATE_ANY_LENGTH,
  UPDATE_DIMENSIONS_LENGTH_MIN,
  UPDATE_DIMENSIONS_LENGTH_MAX,
  UPDATE_ANY_WIDTH,
  UPDATE_DIMENSIONS_WIDTH_MIN,
  UPDATE_DIMENSIONS_WIDTH_MAX,
  UPDATE_ANY_DEPTH,
  UPDATE_DIMENSIONS_DEPTH_MIN,
  UPDATE_DIMENSIONS_DEPTH_MAX,
  UPDATE_ANY_VOLUME,
  UPDATE_DIMENSIONS_VOLUME_MIN,
  UPDATE_DIMENSIONS_VOLUME_MAX,
  // UPDATE_ANY_RANGE,
  // UPDATE_RANGE_MIN,
  // UPDATE_RANGE_MAX,
} from "../actions/types";

const initialState = {
  isFiltersVisible: true,
  layout: "Gallery",
  sort: "Newest",
  distance: 25,
  price: { any: true, min: null, max: null },
  length: { any: true, min: null, max: null },
  width: { any: true, min: null, max: null },
  depth: { any: true, min: null, max: null },
  volume: { any: true, min: null, max: null },
  boardType: [],
  condition: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case UPDATE_ANY_RANGE:
    //   console.log("state: ", state[action.payload[name]]);
    //   return {
    //     ...state,
    //     [action.payload.name]: {
    //       any: action.payload.value,
    //     },
    //   };
    // case UPDATE_RANGE_MIN:
    //   return {
    //     ...state,
    //     [action.payload.name]: {
    //       ...state[action.payload.name],
    //       min: action.payload.value,
    //     },
    //   };
    // case UPDATE_RANGE_MAX:
    //   return {
    //     ...state,
    //     [action.payload.name]: {
    //       ...state[action.payload.name],
    //       max: action.payload.value,
    //     },
    //   };

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

    //dimensions
    case UPDATE_ANY_LENGTH:
      return {
        ...state,
        length: {
          ...state.length,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MIN:
      return {
        ...state,
        length: {
          ...state.length,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_LENGTH_MAX:
      return {
        ...state,
        length: {
          ...state.length,
          max: action.payload,
        },
      };
    case UPDATE_ANY_WIDTH:
      return {
        ...state,
        width: {
          ...state.width,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_WIDTH_MIN:
      return {
        ...state,
        width: {
          ...state.width,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_WIDTH_MAX:
      return {
        ...state,
        width: {
          ...state.width,
          max: action.payload,
        },
      };
    case UPDATE_ANY_DEPTH:
      return {
        ...state,
        depth: {
          ...state.depth,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_DEPTH_MIN:
      return {
        ...state,
        depth: {
          ...state.depth,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_DEPTH_MAX:
      return {
        ...state,
        depth: {
          ...state.depth,
          max: action.payload,
        },
      };
    case UPDATE_ANY_VOLUME:
      return {
        ...state,
        volume: {
          ...state.volume,
          any: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_VOLUME_MIN:
      return {
        ...state,
        volume: {
          ...state.volume,
          min: action.payload,
        },
      };
    case UPDATE_DIMENSIONS_VOLUME_MAX:
      return {
        ...state,
        volume: {
          ...state.volume,
          max: action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
