import axios from 'axios';

export async function addFavorite(postId) {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //stringify the form items
  const data = { postId: postId };
  const body = JSON.stringify(data);

  //update post to DB
  try {
    await axios.put('/api/posts/favorite', body, config);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}

export async function removeFavorite(postId) {
  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //stringify the form items
  const data = { postId: postId };
  const body = JSON.stringify(data);

  //update post to DB
  try {
    await axios.put('/api/posts/unfavorite', body, config);
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}
