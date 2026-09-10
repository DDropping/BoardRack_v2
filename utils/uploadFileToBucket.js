import axios from "axios";

import baseUrl from "./baseUrl";

// A bare client, deliberately separate from the default axios instance: the app
// sets a global Authorization default, and S3 rejects a presigned request that
// carries headers which were not part of the signature. The previous code
// deleted the global default and restored it afterwards, which raced against
// any other request in flight.
const s3Client = axios.create({ transformRequest: [(data) => data] });

const uploadFileToBucket = async (file) => {
  const contentType = file.type;
  const key = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  //get signed url to upload image
  const generatePutUrl = `${baseUrl}/api/util/generatePutUrl`;
  const {
    data: { putURL },
  } = await axios.get(generatePutUrl, {
    params: { Key: key, ContentType: contentType },
  });

  //send put request to upload image to s3 bucket
  await s3Client.put(putURL, file, {
    headers: { "Content-Type": contentType },
  });

  return `${process.env.NEXT_PUBLIC_S3_PUBLIC_URL}/${key}`;
};

export default uploadFileToBucket;
