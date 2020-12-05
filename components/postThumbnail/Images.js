import React from "react";

import { ImageContainer, ImageBackgroundWrapper, ImageWrapper } from "./style";
import ImageStatusOverlay from "../images/ImageStatusOverlay";

const Images = ({ data }) => {
  return (
    <ImageContainer>
      {!data.isAvailable && (
        <ImageStatusOverlay isSold={data.isSold} size={16} />
      )}
      <ImageBackgroundWrapper
        style={
          data.image
            ? { backgroundImage: "url(" + data.image.thumbnail + ")" }
            : null
        }
      />
      <ImageWrapper
        alt=""
        src={data.image ? data.image.thumbnail : "/images/br_default_post.png"}
      />
    </ImageContainer>
  );
};

export default Images;
