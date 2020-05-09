import React, { useRef } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselContainer = styled.div`
  position: relative;
  height: 200px; /* controls height of unobstructed carosel */
`;

const CarouselWrapper = styled.div`
  z-index: 1;
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

const ArrowWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const PreviousArrow = styled.div`
  width: 100px;
  height: 200px;
  position: absolute;
  left: 0;
  font-size: 3rem;
  padding: 65px 10px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 69, 138);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.500437675070028) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const NextArrow = styled.div`
  width: 100px;
  height: 200px;
  position: absolute;
  right: 0;
  font-size: 3rem;
  padding: 65px 10px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 69, 138);
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.500437675070028) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const index = () => {
  const carouselRef = useRef();

  return (
    <CarouselContainer>
      <ArrowWrapper>
        <PreviousArrow onClick={() => carouselRef.current.prev()}>
          <LeftOutlined />
        </PreviousArrow>
      </ArrowWrapper>
      <ArrowWrapper>
        <NextArrow onClick={() => carouselRef.current.next()}>
          <RightOutlined style={{ float: 'right' }} />
        </NextArrow>
      </ArrowWrapper>
      <CarouselWrapper>
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={7000}
          dotPosition="top"
        >
          <div>
            <ImgWrapper>
              <Img src="/images/banner/buysell.png" alt="boardrack logo" />
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
              <Img src="/images/banner/supportlocal.png" alt="boardrack logo" />
            </ImgWrapper>
          </div>
        </Carousel>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default index;
