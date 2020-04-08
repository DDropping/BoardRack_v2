import { SET_IMG_KEY, SET_OBJECTURL_URL } from '../actions/types';

const initialState = {
  imgKey: 0,
  imgList: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_IMG_KEY:
      return {
        ...state,
        imgKey: payload
      };
    case SET_OBJECTURL_URL:
      return {
        ...state,
        imgList: [
          ...state.imgList,
          {
            imgKey: action.payload.imgKey,
            isLoading: true,
            objectUrl: action.payload.objectUrl,
            imgDefault: null,
            imgThumbnail: null
          }
        ]
      };
    default:
      return state;
  }
}
