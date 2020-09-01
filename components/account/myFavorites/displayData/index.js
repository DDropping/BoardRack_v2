import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Container, ButtonContainer, Ul, Li } from "./style";
import PostCard from "../../../postCard";
import PostModal from "../../../postModal";
import LoadingScreenCard from "../../../loadingScreens/postCard";
import NoFavoritesFoundMessage from "./NoFavoritesFoundMessage";
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
      setPosts(preview ? user.favorites.slice(0, 5) : user.favorites);
      setLoading(false);
    }
  }, [isAuthenticated, user]);

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
        <Ul preview={preview}>
          <PostModal quickData={posts} />
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} />
              </Li>
            );
          })}
          {preview && (
            <Li>
              <ViewAllButton link="/account?view=favorites" />
            </Li>
          )}
        </Ul>
      )}

      {!isLoading && posts.length === 0 && <NoFavoritesFoundMessage />}
    </Container>
  );
};

export default index;
