import React from "react";
import Link from "next/link";

import { CardContainer } from "./style";
import Header from "./Header";
import Images from "./Images";
import Content from "./Content";
import ManagementOptions from "./ManagementOptions";

const index = ({ postData, isManagementView }) => {
  const headerData = {
    postId: postData._id,
    price: postData.price,
    favorites: postData.favorites,
    viewCount: postData.viewCount,
  };
  const imageData = {
    image: postData.images[0],
  };
  const contentData = {
    title: postData.title,
    lengthFt: postData.lengthFt,
    lengthIn: postData.lengthIn,
    width: postData.width,
    depth: postData.depth,
    volume: postData.volume,
  };
  return (
    <CardContainer>
      <Header data={headerData} />
      <Link
        scroll={false}
        href={
          isManagementView
            ? `/postdetails/${postData._id}`
            : `/?postId=${postData._id}`
        }
        as={`/postdetails/${postData._id}`}
      >
        <a>
          <Images data={imageData} />
          <Content data={contentData} />
        </a>
      </Link>
      {isManagementView && <ManagementOptions postId={postData._id} />}
    </CardContainer>
  );
};

export default index;
