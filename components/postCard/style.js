import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 400px; /* overall size of post card */
  margin-left: 10px;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.primaryWhite};
  transition: box-shadow 0.3s;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;

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
