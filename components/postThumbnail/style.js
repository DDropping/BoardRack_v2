import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  margin: 0 10px 10px 10px;
  display: flex;
  flex-direction: row;
  transition: ${({ theme }) => theme.boxShadow};
  background-color: white;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  cursor: pointer;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
  overflow: hidden;
`;

//POST ROW IMAGES
export const ImageContainer = styled.div`
  position: relative;
  text-align: center; /* needed to allow vertical centering */
  width: 125px;
  height: 125px;
  line-height: 125px; /* overall post card height - post header height | used to center photo in white space*/
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
  margin-top: -3px; /* fix margin issue */
`;

//POST ROW CONTENT
export const ContentContainer = styled.div`
  height: 125px;
  flex: 1;
  padding: 5px;
`;

export const ContentTitle = styled.div`
  font-size: 18px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
