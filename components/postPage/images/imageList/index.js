import React from "react";

import { ImageContainer } from "./style";

const index = ({ images }) => {
  return (
    <ImageContainer>
      {images[0] ? (
        images.map((image, index) => (
          <img
            style={{ width: "100%", marginBottom: "2px" }}
            key={index}
            alt=""
            src={image.standard}
          />
        ))
      ) : (
        <img
          style={{ width: "100%", marginBottom: "2px" }}
          alt="surfboard placeholder"
          src={"/images/br_default_post.png"}
        />
      )}
    </ImageContainer>
  );
};

export default index;
