import React from "react";
import Link from "next/link";

import {
  CardContainer,
  ImageContainer,
  ImageBackgroundWrapper,
  ImageWrapper,
  DetailsContainer,
} from "./style";

const PostCard = ({ post }) => {
  const { title, lengthFt, lengthIn, width, depth } = post;
  return (
    <Link
      scroll={false}
      href={`/?postId=${post._id}`}
      as={`/postdetails/${post._id}`}
    >
      <a>
        <CardContainer>
          <ImageContainer>
            <ImageBackgroundWrapper
              style={
                post.images[0]
                  ? { backgroundImage: "url(" + post.images[0].thumbnail + ")" }
                  : null
              }
            />
            <ImageWrapper
              alt=""
              src={
                post.images[0]
                  ? post.images[0].thumbnail
                  : "/images/br_default_post.png"
              }
            />
          </ImageContainer>
          <DetailsContainer>
            <strong>{title}</strong>
            <br />
            {lengthFt &&
              lengthIn &&
              width &&
              depth &&
              lengthFt + "'" + lengthIn + '" x ' + width + '" x ' + depth + '"'}
          </DetailsContainer>
        </CardContainer>
      </a>
    </Link>
  );
};

export default PostCard;
