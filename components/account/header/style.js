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
  background-color: ${({ bgColor }) => bgColor};
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 100px;
  margin-left: 25px;
`;

export const EditButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;

export const BackgroundMenu = styled.ul`
  list-style-type: none;
  background-color: white;
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  padding: 5px 0px 0px 5px;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.4);
  overflow-y: auto;
`;

export const MenuItem = styled.li`
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const MiniBackgroundImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const BackgroundImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const MenuItemColor = styled.li`
  margin-bottom: 5px;
  height: 50px;
  width: calc(25% - 5px);
  display: inline-block;
  margin-right: 5px;
`;

export const ColorBox = styled.div`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 100%;
  display: inline-block;
`;
