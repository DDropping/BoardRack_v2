import React from 'react';

import { ImageContainer, ImageBackgroundWrapper, ImageWrapper } from './style';
const Images = ({ data }) => {
  return (
    <ImageContainer>
      <ImageBackgroundWrapper
        style={
          data.image
            ? { backgroundImage: 'url(' + data.image.thumbnail + ')' }
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
          data.image
            ? data.image.thumbnail
            : process.env.PUBLIC_URL + '/images/br-placeholder-shortboard.png'
        }
      />
    </ImageContainer>
  );
};

export default Images;
