import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    line-height: 160px;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  min-width: 800px;
  cursor: pointer;
  /* @media (max-width: ${(props) => props.theme.md}) {
    display: none;
  } */
`;

export const Img = styled.img`
  width: 100%;
`;

const index = () => {
  return (
    <CarouselWrapper>
      <Carousel autoplay autoplaySpeed={7000} dotPosition="top">
        <div>
          <ImgWrapper>
            <Img src="/images/banner/calculator.png" alt="boardrack logo" />
          </ImgWrapper>
        </div>
        <div>
          <ImgWrapper>
            <Img
              src="/images/banner/findwhatyoulove.png"
              alt="boardrack logo"
            />
          </ImgWrapper>
        </div>
        <div>
          <ImgWrapper>
            <Img src="/images/banner/calculator.png" alt="boardrack logo" />
          </ImgWrapper>
        </div>
        <div>
          <ImgWrapper>
            <Img
              src="/images/banner/findwhatyoulove.png"
              alt="boardrack logo"
            />
          </ImgWrapper>
        </div>
      </Carousel>
    </CarouselWrapper>
  );
};

export default index;
