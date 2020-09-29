import styled from "styled-components";

//${({ isMessageThreadView }) => isMessageThreadView && { display: "none" }}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-color: #c8deff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 100px;
  margin-left: 25px;
`;
