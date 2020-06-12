import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import {
  CarouselContainer,
  CarouselWrapper,
  ImgWrapper,
  Img,
  ArrowWrapper,
  PreviousArrow,
  NextArrow,
} from './style';

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
          <RightOutlined />
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
