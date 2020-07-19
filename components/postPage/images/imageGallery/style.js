import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  text-align: center; /* needed to allow vertical centering */
  width: 100%;
  height: 700px;
  line-height: 700px; /* overall post card height| used to center photo in vertically*/
  background-color: #f3f7f9;
  overflow: hidden;
  margin-top: 10px;
  @media (min-width: ${({ theme }) => theme.md1}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.md}) {
    height: 550px;
    line-height: 550px;
  }
  @media (max-width: ${({ theme }) => theme.sm}) {
    height: 350px;
    line-height: 350px;
  }
  @media (max-width: ${({ theme }) => theme.xs}) {
    height: 200px;
    line-height: 200px;
  }
`;

export const ImageBackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  filter: opacity(0.2);
  -webkit-filter: opacity(0.2);
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  background-position: center;
`;

export const ImageWrapper = styled.img`
  max-height: 100%; /* overall post card height | used to center photo in white space*/
  max-width: 100%;
  vertical-align: middle; /* center vertically */
  margin: 0 auto; /* center horizontally */
  position: relative;
  border: 1px solid rgb(255, 255, 255);
  margin-top: -3px; /* fix margin issue */
`;

export const ArrowWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const PreviousArrow = styled.div`
  position: absolute;
  left: 0;
  font-size: 3rem;
  padding: 0 10px;
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
  position: absolute;
  right: 0;
  font-size: 3rem;
  padding: 0 10px;
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
