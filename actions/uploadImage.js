import imageCompression from "browser-image-compression";

import uploadFileToBucket from "../utils/uploadFileToBucket";

import {
  SET_OBJECTURL_URL,
  SET_STANDARD_URL,
  SET_THUMBNAIL_URL,
  SET_IMG_KEY,
  SET_UPLOAD_PERCENTAGE,
  UPLOAD_ERROR,
  DELETE_IMG_PREVIEW,
} from "./types";

export const uploadImage = (imgKey, file) => async (dispatch) => {
  //image compression standard options
  const standardOptions = {
    maxSizeMB: 0.2,
    useWebWorker: true,
    onProgress: (percentage) => {
      dispatch({
        type: SET_UPLOAD_PERCENTAGE,
        payload: { imgKey: imgKey, percentage: Math.round(percentage / 2) },
      });
    },
  };

  //image compression thumbnail options
  const thumbnailOptions = {
    maxSizeMB: 0.05,
    useWebWorker: true,
    onProgress: (percentage) => {
      dispatch({
        type: SET_UPLOAD_PERCENTAGE,
        payload: {
          imgKey: imgKey,
          percentage: Math.round(percentage / 2 + 50),
        },
      });
    },
  };

  try {
    //create object url for img preview
    dispatch({
      type: SET_OBJECTURL_URL,
      payload: { imgKey: imgKey, objectUrl: URL.createObjectURL(file) },
    });

    //increase image key
    dispatch({ type: SET_IMG_KEY, payload: imgKey + 1 });

    //Create compressed images
    const compressedFileStandard = await imageCompression(
      file,
      standardOptions
    );
    const compressedFileThumbnail = await imageCompression(
      file,
      thumbnailOptions
    );

    //upload standard image and thumbnail to s3 bucket
    const standardUrl = await uploadFileToBucket(compressedFileStandard);
    const thumbnailUrl = await uploadFileToBucket(compressedFileThumbnail);

    //update store
    dispatch({
      type: SET_STANDARD_URL,
      payload: { imgKey: imgKey, standardUrl: standardUrl },
    });

    dispatch({
      type: SET_THUMBNAIL_URL,
      payload: { imgKey: imgKey, thumbnailUrl: thumbnailUrl },
    });
  } catch (err) {
    console.log("error message", err);
    dispatch({ type: UPLOAD_ERROR, payload: imgKey });
    setTimeout(function () {
      dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
    }, 5000);
  }
};
