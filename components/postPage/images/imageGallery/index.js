import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import {
  ImageContainer,
  ImageBackgroundWrapper,
  ImageWrapper,
  ArrowWrapper,
  PreviousArrow,
  NextArrow,
} from "./style";

const index = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <ImageContainer>
      {currentImage > 0 && (
        <ArrowWrapper>
          <PreviousArrow onClick={() => prev()}>
            <LeftOutlined />
          </PreviousArrow>
        </ArrowWrapper>
      )}
      {currentImage < images.length - 1 && (
        <ArrowWrapper>
          <NextArrow onClick={() => next()}>
            <RightOutlined />
          </NextArrow>
        </ArrowWrapper>
      )}
      <ImageBackgroundWrapper
        style={
          images && {
            backgroundImage: "url(" + images[currentImage].standard + ")",
          }
        }
      />
      <ImageWrapper
        alt=""
        src={
          images ? images[currentImage].standard : "/images/br_default_post.png"
        }
      />
    </ImageContainer>
  );
};

export default index;
