import axios from 'axios';

export const favorite = (id) => async (dispatch) => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //stringify the form items
  const postid = { postId: id };
  const body = JSON.stringify(postid);

  //update post to DB
  try {
    await axios.put('/api/posts/favorite', body, config);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const unfavorite = (id) => async (dispatch) => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //stringify the form items
  const postid = { postId: id };
  const body = JSON.stringify(postid);

  //update post to DB
  try {
    await axios.put('/api/posts/unfavorite', body, config);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
