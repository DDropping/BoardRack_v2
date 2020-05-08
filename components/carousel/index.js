import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: ${({ theme }) => theme.primaryBlue};
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const index = () => {
  return (
    <CarouselWrapper>
      <Carousel autoplay autoplaySpeed={7000} dotPosition="top">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </CarouselWrapper>
  );
};

export default index;
