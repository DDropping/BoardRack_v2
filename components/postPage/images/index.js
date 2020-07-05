import React from "react";

import { ImagesContainer } from "./style";

const index = ({ images }) => {
  return (
    <ImagesContainer>
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
    </ImagesContainer>
  );
};

export default index;
