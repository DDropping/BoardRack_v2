import React, { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";

import {
  CarouselContainer,
  CarouselWrapper,
  ImgWrapper,
  ArrowWrapper,
  PreviousArrow,
  NextArrow,
} from "./style";

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
          dotPosition='top'
        >
          <div>
            <ImgWrapper>
              <Image
                src='/images/banner/buysell.png'
                alt='boardrack banner'
                layout='fixed'
                width={3600}
                height={500}
              />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Image
                src='/images/banner/findlove.png'
                alt='boardrack banner'
                layout='fixed'
                width={3600}
                height={500}
              />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Image
                src='/images/banner/calculator.png'
                alt='boardrack banner'
                layout='fixed'
                width={3600}
                height={500}
              />
            </ImgWrapper>
          </div>
          <div>
            <ImgWrapper>
              <Image
                src='/images/banner/supportlocal.png'
                alt='boardrack banner'
                layout='fixed'
                width={3600}
                height={500}
              />
            </ImgWrapper>
          </div>
        </Carousel>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default index;
