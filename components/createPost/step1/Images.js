import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

import baseUrl from '../../../utils/baseUrl';

const INITIAL_STATE = {
  message: ''
};

const Images = () => {
  const uploadImage = async e => {
    try {
      //get image
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];

        //set contetn type
        const contentType = file.type;

        //set axios arguments
        const generatePutUrl = `${baseUrl}/api/util/generatePutUrl`;
        const key = Date.now();
        const options = {
          params: {
            Key: key,
            ContentType: contentType
          },
          headers: {
            'Content-Type': contentType,
            'x-amz-acl': 'public-read'
          }
        };

        //send get request for s3 signed url
        const {
          data: { putURL }
        } = await axios.get(generatePutUrl, options);

        //delete authorization header (s3 throws error with authorization header)
        delete axios.defaults.headers.common['Authorization'];

        //send put request to upload image to s3 bucket
        await axios.put(putURL, file, options);

        //re-add authorization header
        const token = cookie.get('token');
        axios.defaults.headers.common['Authorization'] = token;

        console.log(
          'getUrl: ',
          `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`
        );
      }
    } catch (err) {
      console.log('error message', err);
    }
  };

  return (
    <div>
      <h1>Upload an image to AWS S3 bucket</h1>
      <input
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />
    </div>
  );
};

export default Images;
