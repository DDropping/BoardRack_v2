import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  height: 200px; /* controls height of unobstructed carosel */
`;

export const CarouselWrapper = styled.div`
  z-index: 1;
  .ant-carousel .slick-slide {
    text-align: center;
    line-height: 500px; /* controls height of total carousel */
    overflow: hidden;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  min-width: 3600px;
  max-height: 500px;
  overflow: hidden;
  margin-left: 50%; /**used to allow overflow to the left */
  transform: translateX(-50%); /**used to allow overflow to the left */
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  margin: auto;
`;

export const ArrowWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const PreviousArrow = styled.div`
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

export const NextArrow = styled.div`
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
