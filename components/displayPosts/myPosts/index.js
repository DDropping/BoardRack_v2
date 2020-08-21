import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "antd";
import { PlusOutlined, AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Container, ButtonContainer, Ul, Li } from "./style";
import baseUrl from "../../../utils/baseUrl";
import PostCard from "../../postCard";
import NewPostButton from "./NewPostButton";
import PostModal from "../../postModal";
import LoadingScreenCard from "../../loadingScreens/postCard";
import NoPostsFoundMessage from "./NoPostsFoundMessage";

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
      const url = `${baseUrl}/api/posts/postdetails/myposts`;
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
          <Button type="primary" style={{ marginLeft: "10px" }}>
            <PlusOutlined /> Create New Posts
          </Button>
          <div style={{ flex: 1 }} />
          <Link href="/account?view=posts" shallow={true}>
            <Button style={{ marginRight: "10px" }}>
              <AppstoreOutlined /> View All Posts
            </Button>
          </Link>
        </ButtonContainer>
      )}

      <Ul preview={preview}>
        <PostModal quickData={posts} />
        {!preview && (
          <Li>
            <NewPostButton />
          </Li>
        )}
        {isLoading && loadingCards}
        {!isLoading &&
          posts.length > 0 &&
          posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} isManagementView={true} />
              </Li>
            );
          })}
      </Ul>

      {!isLoading && posts.length === 0 && <NoPostsFoundMessage />}
    </Container>
  );
};

export default index;
