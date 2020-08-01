import styled from "styled-components";

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
  border-radius: 50%;
  transition: ${({ theme }) => theme.easeInOut};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;
