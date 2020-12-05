import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Container, Ul, Li } from "./style";
import PostCard from "../../../postCard";
import PostModal from "../../../postModal";
import LoadingScreenCard from "../../../loadingScreens/postCard";
import NoDataFoundMessage from "../../NoDataFoundMessage";
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
      {isLoading && loadingCards}

      {!isLoading && posts.length > 0 && (
        <Ul preview={preview}>
          <PostModal quickData={posts} />
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} directToPostPage={true} />
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

      {!isLoading && posts.length === 0 && (
        <NoDataFoundMessage
          title={"Seems you haven't found any boards you like yet."}
          subtitle={
            "That's okay, click the button below to check out boards near you!"
          }
          buttonText={"View Boards"}
          link={"/"}
        />
      )}
    </Container>
  );
};

export default index;
