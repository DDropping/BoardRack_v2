import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import Images from "./images";

const index = ({ quickData, postId }) => {
  const router = useRouter();
  const [postData, setPostData] = useState(quickData);
  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails/${router.query.postId}`;
      const res = await axios.get(url);
      setPostData(res.data);
    }
    if (!quickData) {
      fetchData();
    }
  }, []);

  console.log("quickData:", quickData);
  console.log("postData:", postData);
  return (
    <div>
      {postData && <Images images={postData.images} />}
      {postData ? postData.title : "Loading..."}
      {postData ? postData.price : "Loading..."}
    </div>
  );
};

export default index;
