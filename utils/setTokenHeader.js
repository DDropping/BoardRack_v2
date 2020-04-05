import axios from 'axios';

const setTokenHeader = token => {
  console.log('set token header ', token);
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setTokenHeader;
