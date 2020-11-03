import axios from "axios";
import cookie from "js-cookie";

import baseUrl from "./baseUrl";

export default async (file) => {
  const contentType = file.type;
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
    //delete authorization header (s3 throws error with authorization header)
    delete axios.defaults.headers.common["Authorization"];
    //get signed url to upload image
    const generatePutUrl = `${baseUrl}/api/util/generatePutUrl`;
    const {
      data: { putURL },
    } = await axios.get(generatePutUrl, options);

    //send put request to upload image to s3 bucket
    await axios.put(putURL, file, options);

    //re-add authorization header
    const token = cookie.get("token");
    axios.defaults.headers.common["Authorization"] = token;

    return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
  } catch (err) {
    console.log("error message", err);
  }
};
