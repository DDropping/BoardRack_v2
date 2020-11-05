import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import StatusBox from "./statusBox";
import UserBox from "./userBox";
import CountersBar from "./countersBar";
import Description from "./details/description";
import GeneralDetails from "./details/generalDetails";
import Dimensions from "./details/dimensions";
import Opinion from "./details/opinion";
import Map from "./map";
import SimilarPosts from "./similarPosts";
import Footer from "./footer";
import { ADD_VIEW } from "../../actions/types";
import Toolbar from "./toolbar";
import PostNoLongerExists from "../404/PostNoLongerExists";

const index = ({ quickData, postId, isModalView }) => {
  const dispatch = useDispatch();
  const viewedPosts = useSelector((state) => state.util.viewedPosts);
  const router = useRouter();
  const [postData, setPostData] = useState(quickData);
  const [isLoading, setLoading] = useState(true);

  //fetch post data if quickData is not given
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = `${baseUrl}/api/posts/postdetails/${router.query.postId}`;
        const res = await axios.get(url);
        setPostData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    if (!!router.query.postId) {
      if (!postData || postId !== postData._id) {
        fetchData();
      }
    }
  }, [quickData]);

  //increment view counter if user has not viewed post
  useEffect(() => {
    async function addView(postId) {
      try {
        const url = `${baseUrl}/api/posts/addView/${postId}`;
        await axios.put(url);
        dispatch({ type: ADD_VIEW, payload: postId });
      } catch (err) {}
    }

    if (
      router.query.postId &&
      viewedPosts.filter(
        (postId) => postId.toString() === router.query.postId.toString()
      ).length === 0
    ) {
      addView(router.query.postId);
    }
  });

  return (
    <>
      {postData && (
        <Toolbar postId={router.query.postId} isModalView={isModalView} />
      )}
      <PostPageContainer>
        {!isLoading && !postData && <PostNoLongerExists />}
        {postData && (
          <ImagesContainer>
            <ImageList images={postData.images} />
          </ImagesContainer>
        )}
        {postData && (
          <DataContainer>
            <ImageGallery images={postData.images} />
            <Flexbox>
              {!postData.isAvailable && <StatusBox isSold={postData.isSold} />}
              {postData.user && (
                <UserBox
                  user={postData.user}
                  location={postData.location}
                  postId={postData._id}
                />
              )}

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
              {postData.location.locationImage && (
                <Map
                  map={postData.location.locationImage}
                  lat={postData.location.lat}
                  lng={postData.location.lng}
                />
              )}
              <SimilarPosts postId={postData._id} />
              <div style={{ flex: 1 }} />
              <Footer />
            </Flexbox>
          </DataContainer>
        )}
      </PostPageContainer>
    </>
  );
};

export default index;
