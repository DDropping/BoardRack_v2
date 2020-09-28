import axios from "axios";
import cookie from "js-cookie";
import imageCompression from "browser-image-compression";

import baseUrl from "../utils/baseUrl";
import {
  SET_OBJECTURL_URL,
  SET_STANDARD_URL,
  SET_THUMBNAIL_URL,
  SET_IMG_KEY,
  SET_UPLOAD_PERCENTAGE,
  UPLOAD_ERROR,
  DELETE_IMG_PREVIEW,
} from "./types";

//compress image
const compressImage = async (file, options) => {
  const compressedImage = await imageCompression(file, options);
  return compressedImage;
};

//upload image to s3 bucket
const uploadImageToBucket = async (contentType, compressedImage) => {
  const key = Date.now();
  const options = {
    params: {
      Key: key,
      ContentType: contentType,
    },
    headers: {
      "Content-Type": contentType,
      "x-amz-acl": "public-read",
    },
  };

  try {
    //get signed url to upload image
    const generatePutUrl = `${baseUrl}/api/util/generatePutUrl`;
    const {
      data: { putURL },
    } = await axios.get(generatePutUrl, options);

    //send put request to upload image to s3 bucket
    await axios.put(putURL, compressedImage, options);

    return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
  } catch (err) {
    console.log("error message", err);
  }
};

export const uploadImage = (imgKey, file) => async (dispatch) => {
  //get content type
  const contentType = file.type;

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
    const compressedFileStandard = await compressImage(file, standardOptions);
    const compressedFileThumbnail = await compressImage(file, thumbnailOptions);

    //delete authorization header (s3 throws error with authorization header)
    delete axios.defaults.headers.common["Authorization"];

    //upload standard image and thumbnail to s3 bucket
    const standardUrl = await uploadImageToBucket(
      contentType,
      compressedFileStandard
    );
    const thumbnailUrl = await uploadImageToBucket(
      contentType,
      compressedFileThumbnail
    );

    //update store
    dispatch({
      type: SET_STANDARD_URL,
      payload: { imgKey: imgKey, standardUrl: standardUrl },
    });

    dispatch({
      type: SET_THUMBNAIL_URL,
      payload: { imgKey: imgKey, thumbnailUrl: thumbnailUrl },
    });

    //re-add authorization header
    const token = cookie.get("token");
    axios.defaults.headers.common["Authorization"] = token;
  } catch (err) {
    console.log("error message", err);
    dispatch({ type: UPLOAD_ERROR, payload: imgKey });
    setTimeout(function () {
      dispatch({ type: DELETE_IMG_PREVIEW, payload: imgKey });
    }, 5000);
  }
};
