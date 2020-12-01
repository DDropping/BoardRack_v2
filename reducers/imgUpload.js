import {
  SET_IMG_KEY,
  SET_OBJECTURL_URL,
  SET_UPLOAD_PERCENTAGE,
  SET_THUMBNAIL_URL,
  SET_STANDARD_URL,
  DELETE_IMG_PREVIEW,
  SET_DEFAULT_IMAGE,
  UPLOAD_ERROR,
  EDIT_POST_INSERT_DATA,
  RESET_CREATE_POST_FORM_DATA,
} from "../actions/types";

const initialState = {
  imgKey: 0,
  imgList: [],
};

const reducer = function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_IMG_KEY:
      return {
        ...state,
        imgKey: payload,
      };
    case SET_OBJECTURL_URL:
      return {
        ...state,
        imgList: [
          ...state.imgList,
          {
            imgKey: action.payload.imgKey,
            isLoading: true,
            percentage: 0,
            error: false,
            objectUrl: action.payload.objectUrl,
            standardUrl: null,
            thumbnailUrl: null,
          },
        ],
      };
    case SET_STANDARD_URL:
      return {
        ...state,
        imgList: state.imgList.map((item) =>
          item.imgKey === action.payload.imgKey
            ? {
                ...item,
                standardUrl: action.payload.standardUrl,
                isLoading: false,
              }
            : item
        ),
      };
    case SET_THUMBNAIL_URL:
      return {
        ...state,
        imgList: state.imgList.map((item) =>
          item.imgKey === action.payload.imgKey
            ? {
                ...item,
                thumbnailUrl: action.payload.thumbnailUrl,
              }
            : item
        ),
      };
    case SET_UPLOAD_PERCENTAGE:
      return {
        ...state,
        imgList: state.imgList.map((item) =>
          item.imgKey === action.payload.imgKey
            ? { ...item, percentage: action.payload.percentage }
            : item
        ),
      };
    case DELETE_IMG_PREVIEW:
      return {
        ...state,
        imgList: state.imgList.filter((img) => {
          if (img.imgKey === action.payload) {
            return false;
          }
          return true;
        }),
      };
    case SET_DEFAULT_IMAGE:
      var selectedImg;
      state.imgList.map((img) => {
        if (img.imgKey === action.payload) selectedImg = img;
      });
      var newImgList = state.imgList.filter(
        (img) => img.imgKey !== action.payload
      );
      newImgList.unshift(selectedImg);
      return {
        ...state,
        imgList: newImgList,
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        imgList: state.imgList.map((item) =>
          item.imgKey === action.payload ? { ...item, error: true } : item
        ),
      };
    case EDIT_POST_INSERT_DATA:
      return {
        imgKey: payload.images.length,
        imgList: payload.images.map((imageData, index) => {
          return {
            imgKey: index,
            isLoading: false,
            percentage: 100,
            error: false,
            objectUrl: null,
            standardUrl: imageData.standard,
            thumbnailUrl: imageData.thumbnail,
          };
        }),
      };
    case RESET_CREATE_POST_FORM_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
