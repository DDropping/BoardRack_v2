import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "antd";
import { PlusOutlined, AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Container, ButtonContainer, Ul, Li } from "./style";
import PostCard from "../../../postCard";
import NewPostButton from "./NewPostButton";
import PostModal from "../../../postModal";
import LoadingScreenCard from "../../../loadingScreens/postCard";
import NoPostsFoundMessage from "./NoPostsFoundMessage";
import ViewAllButton from "../../util/ViewAllButton";

const index = ({ preview }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let loadingCards = [];
  for (let i = 0; i < 20; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  useEffect(() => {
    if (isAuthenticated) {
      setPosts(preview ? user.posts.slice(0, 5) : user.posts);
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  return (
    <Container>
      {isLoading && loadingCards}

      {!isLoading && posts.length > 0 && (
        <Ul preview={preview}>
          <PostModal quickData={posts} />

          {!preview && (
            <Li>
              <NewPostButton />
            </Li>
          )}

          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} isManagementView={true} />
              </Li>
            );
          })}

          {preview && (
            <Li>
              <ViewAllButton link="/account?view=posts" />
            </Li>
          )}
        </Ul>
      )}

      {!isLoading && posts.length === 0 && <NoPostsFoundMessage />}
    </Container>
  );
};

export default index;
