import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Container, ButtonContainer, Li } from "./style";
import baseUrl from "../../../../utils/baseUrl";
import PostCard from "../../../postCard";
import PostModal from "../../../postModal";
import LoadingScreenCard from "../../../loadingScreens/postCard";
import NoFavoritesFoundMessage from "./NoFavoritesFoundMessage";
import ViewAllButton from "../../../displayPosts/ViewAllButton";

const index = ({ preview }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let loadingCards = [];
  for (let i = 0; i < 20; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails/myfavorites`;
      const res = await axios.get(url);
      setPosts(preview ? res.data.slice(0, 5) : res.data);
      setLoading(false);
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      {preview && posts.length > 0 && (
        <ButtonContainer>
          <div style={{ flex: 1 }} />
          <Link href="/account?view=favorites" shallow={true}>
            <Button style={{ marginRight: "10px" }}>
              <AppstoreOutlined /> View All Favorites
            </Button>
          </Link>
        </ButtonContainer>
      )}

      {isLoading && loadingCards}

      {!isLoading && posts.length > 0 && (
        <>
          <PostModal quickData={posts} />
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} />
              </Li>
            );
          })}
        </>
      )}

      {preview && posts.length > 0 && (
        <Li>
          <ViewAllButton link="/account?view=favorites" />
        </Li>
      )}

      {!isLoading && posts.length === 0 && <NoFavoritesFoundMessage />}
    </Container>
  );
};

export default index;
