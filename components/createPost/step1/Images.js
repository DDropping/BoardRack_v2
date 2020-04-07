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
        const options = {
          params: {
            Key: file.name,
            ContentType: contentType
          },
          headers: {
            'Content-Type': contentType
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

        //get image url from s3 bucket
        const generateGetUrl = `http://${baseUrl}/generateGetUrl`;
        const {
          data: { getUrl }
        } = await axios.get(generateGetUrl, options);
        console.log(getUrl);
      }
    } catch (err) {
      console.log(err);
    }

    //send get request for s3 signed url
    //   axios.get(generatePutUrl, options).then(res => {
    //     const {
    //       data: { putURL }
    //     } = res;
    //     console.log(res);
    //     delete axios.defaults.headers.common['Authorization'];
    //     axios
    //       .put(putURL, file, options)
    //       .then(res => {
    //         setImg({ message: 'Upload Successful' });
    //         setTimeout(() => {
    //           setImg({ message: '' });
    //           document.querySelector('#upload-image').value = '';
    //         }, 2000);
    //       })
    //       .catch(err => {
    //         setImg({ message: 'Sorry, something went wrong' });
    //         console.log('err', err);
    //       });
    //     const token = cookie.get('token');
    //     axios.defaults.headers.common['Authorization'] = token;
    //   });
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
