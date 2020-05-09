import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  height: 200px;
`;

const CarouselWrapper = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    line-height: 500px; /* controls height of total carousel */
    overflow: hidden;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  min-width: 3600px;
  max-height: 500px;
  overflow: hidden;
  margin-left: 50%; /**used to allow overflow to the left */
  transform: translateX(-50%); /**used to allow overflow to the left */
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  margin: auto;
`;

const index = () => {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <Carousel autoplay autoplaySpeed={7000} dotPosition="top">
          <div>
            <ImgWrapper>
              <Img src="/images/banner/calculator.png" alt="boardrack logo" />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Img src="/images/banner/findlove.png" alt="boardrack logo" />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Img src="/images/banner/calculator.png" alt="boardrack logo" />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Img src="/images/banner/findlove.png" alt="boardrack logo" />
            </ImgWrapper>
          </div>
        </Carousel>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default index;
