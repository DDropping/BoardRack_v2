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

export const uploadImage = (imgKey, file) => async (dispatch) => {
  //image compression options
  const standardOptions = {
    maxSizeMB: 0.2,
    useWebWorker: true,
    onProgress: handleProgress,
  };

  const thumbnailOptions = {
    maxSizeMB: 0.05,
    useWebWorker: true,
    onProgress: handleProgress2,
  };

  function handleProgress(percentage) {
    dispatch({
      type: SET_UPLOAD_PERCENTAGE,
      payload: { imgKey: imgKey, percentage: Math.round(percentage / 2) },
    });
  }

  function handleProgress2(percentage) {
    dispatch({
      type: SET_UPLOAD_PERCENTAGE,
      payload: { imgKey: imgKey, percentage: Math.round(percentage / 2 + 50) },
    });
  }

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
      compressedFileStandard,
      thumbnailOptions
    );

    //set content type
    const contentType = file.type;

    //delete authorization header (s3 throws error with authorization header)
    delete axios.defaults.headers.common["Authorization"];

    //set axios arguments to get signed url for standard image
    const generatePutUrl = `${baseUrl}/api/util/generatePutUrl`;
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

    //get signed url for standard image
    const {
      data: { putURL },
    } = await axios.get(generatePutUrl, options);

    //send put request to upload standard image to s3 bucket
    await axios.put(putURL, compressedFileStandard, options);

    //add to state
    const standardUrl = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
    dispatch({
      type: SET_STANDARD_URL,
      payload: { imgKey: imgKey, standardUrl: standardUrl },
    });

    //set axios arguments to get signed url for thumbnail
    const keyThumbnail = Date.now();
    const optionsThumbnail = {
      params: {
        Key: keyThumbnail,
        ContentType: contentType,
      },
      headers: {
        "Content-Type": contentType,
        "x-amz-acl": "public-read",
      },
    };

    //get signed url for thumbanil
    const res = await axios.get(generatePutUrl, optionsThumbnail);
    const putURLThumbnail = res.data.putURL;

    //send put request to upload thumbnail to s3 bucket
    await axios.put(putURLThumbnail, compressedFileThumbnail, options);

    //add to state
    const thumbnailUrl = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${keyThumbnail}`;
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
