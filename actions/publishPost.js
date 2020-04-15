import axios from 'axios';

import baseUrl from '../utils/baseUrl';
import {
  successNotification,
  failNotification
} from '../components/notifications';

export const publishPost = (location, imgList, formData) => async dispatch => {
  try {
    const postItems = formData;
    console.log(imgList);
    const images = imgList.map(obj => {
      console.log(obj.standardUrl);
      console.log(obj.thumbnailUrl);
      return {
        standard: obj.standardUrl,
        thumbnail: obj.thumbnailUrl
      };
    });

    postItems.images = images;
    postItems.location = {};
    postItems.location.lat = location.lat;
    postItems.location.lng = location.lng;
    postItems.location.country = location.country;
    postItems.location.state = location.state;
    postItems.location.city = location.city;
    postItems.location.postalCode = location.postalCode;
    postItems.location.locationImage = location.locationImage;

    //set headers for request
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    //stringify the form items
    const body = JSON.stringify(postItems);

    //post new account to DB
    const url = `${baseUrl}/api/posts/createpost`;
    const res = await axios.post(url, body, config);
    console.log(res);
    successNotification(
      'New Post Created!',
      'Your Post Has Been Created And Is Live For The World To See',
      4.5
    );
  } catch (err) {
    if (err) {
      console.log(err);
      failNotification(
        'Uhh Ohh, Something Went Wrong',
        'Sorry, Your Post Could Not Be Created At This Time',
        4.5
      );
    }
  }
};
