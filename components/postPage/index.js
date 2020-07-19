import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import {
  PostPageContainer,
  ImagesContainer,
  DataContainer,
  Flexbox,
} from "./style";
import baseUrl from "../../utils/baseUrl";
import ImageList from "./images/imageList";
import ImageGallery from "./images/imageGallery";
import UserBox from "./userBox";
import CountersBar from "./countersBar";
import Description from "./details/description";
import GeneralDetails from "./details/generalDetails";
import Dimensions from "./details/dimensions";
import Opinion from "./details/opinion";
import Map from "./map";
import SimilarPosts from "./similarPosts";
import Footer from "./footer";

const index = ({ quickData, postId }) => {
  const router = useRouter();
  const [postData, setPostData] = useState(quickData);
  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails/${router.query.postId}`;
      const res = await axios.get(url);
      setPostData(res.data);
    }
    if (!!router.query.postId) {
      if (!postData || postId !== postData._id) {
        fetchData();
      }
    }
  }, [quickData]);

  console.log("quickData:", quickData);
  console.log("postData:", postData);
  return (
    <PostPageContainer>
      {postData && (
        <ImagesContainer>
          <ImageList images={postData.images} />
        </ImagesContainer>
      )}
      {postData && (
        <DataContainer>
          <ImageGallery images={postData.images} />
          <Flexbox>
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
            <div style={{ flex: 1 }} />
            <Footer />
          </Flexbox>
        </DataContainer>
      )}
    </PostPageContainer>
  );
};

export default index;
