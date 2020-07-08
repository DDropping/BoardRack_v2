import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { DataContainer, Title } from "./style";
import baseUrl from "../../utils/baseUrl";
import Images from "./images";
import UserBox from "./userBox";
import CountersBar from "./countersBar";
import Description from "./details/description";
import GeneralDetails from "./details/generalDetails";
import Dimensions from "./details/dimensions";
import Opinion from "./details/opinion";
import Map from "./map";
import SimilarPosts from "./similarPosts";

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
      {postData && (
        <DataContainer>
          <UserBox user={postData.user} location={postData.location} />
          <CountersBar
            date={postData.date}
            views={postData.viewCount}
            favorites={postData.favorites}
          />
          <Description
            price={postData.price}
            title={postData.title}
            description={postData.description}
          />
          <GeneralDetails post={postData} />
          <Dimensions post={postData} />
          <Opinion post={postData} />
          <Map
            map={postData.location.locationImage}
            lat={postData.location.lat}
            lng={postData.location.lng}
          />
          <SimilarPosts postId={postData._id} />
        </DataContainer>
      )}
    </div>
  );
};

export default index;
