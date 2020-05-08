import imgUpload from '@reducers/imgUpload';
import {
  SET_IMG_KEY,
  SET_OBJECTURL_URL,
  SET_UPLOAD_PERCENTAGE,
  SET_THUMBNAIL_URL,
  SET_STANDARD_URL,
  DELETE_IMG_PREVIEW,
  SET_DEFAULT_IMAGE,
  UPLOAD_ERROR
} from '@actions/types';

it('handles action of type SET_IMG_KEY', () => {
  const action = {
    type: SET_IMG_KEY,
    payload: 1
  };

  const newState = imgUpload({}, action);

  expect(newState).toEqual({
    imgKey: 1
  });
});

it('handles action of type SET_OBJECTURL_URL', () => {
  const action = {
    type: SET_OBJECTURL_URL,
    payload: {
      imgKey: 1,
      objectUrl: 'test_objectUrl'
    }
  };

  const newState = imgUpload({ imgList: [] }, action);

  expect(newState).toEqual({
    imgList: [
      {
        imgKey: 1,
        isLoading: true,
        percentage: 0,
        error: false,
        objectUrl: 'test_objectUrl',
        standardUrl: null,
        thumbnailUrl: null
      }
    ]
  });
});

it('handles action of type SET_UPLOAD_PERCENTAGE', () => {
  const action = {
    type: SET_UPLOAD_PERCENTAGE,
    payload: { imgKey: 1, percentage: 10 }
  };

  const newState = imgUpload(
    {
      imgList: [
        {
          imgKey: 1,
          percentage: 0
        }
      ]
    },
    action
  );

  expect(newState).toEqual({
    imgList: [
      {
        imgKey: 1,
        percentage: 10
      }
    ]
  });
});

it('handles action of type SET_THUMBNAIL_URL', () => {
  const action = {
    type: SET_THUMBNAIL_URL,
    payload: { imgKey: 1, thumbnailUrl: 'test_thumbnailUrl' }
  };

  const newState = imgUpload({ imgList: [{ imgKey: 1 }] }, action);

  expect(newState).toEqual({
    imgList: [
      {
        imgKey: 1,
        thumbnailUrl: 'test_thumbnailUrl'
      }
    ]
  });
});

it('handles action of type SET_STANDARD_URL', () => {
  const action = {
    type: SET_STANDARD_URL,
    payload: { imgKey: 1, standardUrl: 'test_standardUrl' }
  };

  const newState = imgUpload({ imgList: [{ imgKey: 1 }] }, action);

  expect(newState).toEqual({
    imgList: [
      {
        imgKey: 1,
        standardUrl: 'test_standardUrl',
        isLoading: false
      }
    ]
  });
});

it('handles action of type DELETE_IMG_PREVIEW', () => {
  const action = {
    type: DELETE_IMG_PREVIEW,
    payload: 1
  };

  const newState = imgUpload({ imgList: [{ imgKey: 1 }] }, action);

  expect(newState).toEqual({
    imgList: []
  });
});

it('handles action of type SET_DEFAULT_IMAGE', () => {
  const action = {
    type: SET_DEFAULT_IMAGE,
    payload: 1
  };

  const newState = imgUpload(
    { imgList: [{ imgKey: 0 }, { imgKey: 1 }] },
    action
  );

  expect(newState).toEqual({
    imgList: [{ imgKey: 1 }, { imgKey: 0 }]
  });
});

it('handles action of type UPLOAD_ERROR', () => {
  const action = {
    type: UPLOAD_ERROR,
    payload: 1
  };

  const newState = imgUpload({ imgList: [{ imgKey: 1 }] }, action);

  expect(newState).toEqual({
    imgList: [{ imgKey: 1, error: true }]
  });
});
