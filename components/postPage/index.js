import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { DataContainer } from "./style";
import baseUrl from "../../utils/baseUrl";
import Images from "./images";
import UserBox from "./userBox";

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
      <DataContainer>
        {postData && (
          <UserBox user={postData.user} location={postData.location} />
        )}
      </DataContainer>
    </div>
  );
};

export default index;
