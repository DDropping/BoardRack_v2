import React from 'react';

import { ImageContainer, ImageBackgroundWrapper, ImageWrapper } from './style';
const Images = ({ post }) => {
  return (
    <ImageContainer>
      <ImageBackgroundWrapper
        style={
          post.images[0]
            ? { backgroundImage: 'url(' + post.images[0].thumbnail + ')' }
            : {
                backgroundImage:
                  process.env.PUBLIC_URL +
                  '/images/br-placeholder-shortboard.png',
              }
        }
      />
      <ImageWrapper
        alt=""
        src={
          post.images[0]
            ? post.images[0].thumbnail
            : process.env.PUBLIC_URL + '/images/br-placeholder-shortboard.png'
        }
      />
    </ImageContainer>
  );
};

export default Images;
