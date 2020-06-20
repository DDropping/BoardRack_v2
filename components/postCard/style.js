import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 400px; /* overall size of post card */
  margin-left: 10px;
  margin-top: 10px;
  background: ${({ theme }) => theme.primaryWhite};
  transition: box-shadow 0.3s;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;

//POST CARD HEADER
export const HeaderContainer = styled.div`
  display: flex;
  z-index: 2;
  width: 100%;
  height: 32px;
  padding: 5px;
  background: ${({ theme }) => theme.primaryWhite};
  border-bottom: 2px solid ${({ theme }) => theme.primaryGrey};
  :hover {
    cursor: default;
  }
`;

//POST CARD CONTENT
export const ContentContainer = styled.div`
  z-index: 2;
  height: 80px;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  background: ${({ theme }) => theme.primaryWhite};
`;

export const ContentTitle = styled.div`
  font-size: 18px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//POST CARD IMAGES
export const ImageContainer = styled.div`
  position: relative;
  text-align: center; /* needed to allow vertical centering */
  width: 300px;
  height: 288px;
  line-height: 288px; /* overall post card height - post header height | used to center photo in white space*/
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
