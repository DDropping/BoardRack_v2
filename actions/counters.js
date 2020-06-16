import axios from 'axios';

export const addFavorite = (id) => async (dispatch) => {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //stringify the form items
  const postid = { postId: postId };
  const body = JSON.stringify(postid);

  //update post to DB
  try {
    await axios.put('/api/posts/favorite', body, config);
    successNotification(
      'Post Favorited',
      'This post has been added to your favorites',
      3.5
    );
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
