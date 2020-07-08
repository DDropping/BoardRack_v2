import styled from "styled-components";

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #00458a;
`;

export const ContainerOutline = styled.div`
  border-top: 2px solid #00458a;
  padding: 5px;
`;

export const CardContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  margin: 5px;
  width: 150px;
  height: 200px;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center; /* needed to allow vertical centering */
  line-height: 150px; /* overall post card height - post header height | used to center photo in white space*/
  height: 150px; /* overall post card height - post header height | used to center photo in white space*/
  width: 150px;
  background-color: #f3f7f9;
  overflow: hidden;
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
  max-height: 100%; /* overall post card height - post header height | used to center photo in white space*/
  max-width: 100%;
  vertical-align: middle; /* center vertically */
  margin: 0 auto; /* center horizontally */
  position: relative;
  border: 1px solid rgb(255, 255, 255);
  margin-top: -2px;
`;

export const DetailsContainer = styled.div`
  padding: 0 5px 5px 5px;
  white-space: "nowrap";
  overflow: "hidden";
  text-overflow: "ellipsis";
`;
