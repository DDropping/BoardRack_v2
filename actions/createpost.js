import axios from 'axios';
import cookie from 'js-cookie';

import baseUrl from '../utils/baseUrl';
import { SET_OBJECTURL_URL } from '../actions/types';

export const uploadImage = (imgKey, file) => async dispatch => {
  try {
    //create object url for img preview
    dispatch({
      type: SET_OBJECTURL_URL,
      payload: { imgKey: imgKey, objectUrl: URL.createObjectURL(file) }
    });
    return;

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
  } catch (err) {
    console.log('error message', err);
  }
};
