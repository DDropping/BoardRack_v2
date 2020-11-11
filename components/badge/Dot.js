import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  display: inline-block;
  min-height: ${({ size }) => size}px;
  min-width: ${({ size, content }) => (content ? size + 8 : size)}px;
  font-size: ${({ size }) => size}px;
  color: white;
  border-radius: ${({ size, content }) => (content ? size + "px" : "50%")};
  ${({ centered }) => centered && { margin: "auto 0" }};
  //background-color: ${({ theme }) => theme.primaryGreen};
  ${({ green, theme }) => green && { backgroundColor: theme.primaryGreen }};
  ${({ red, theme }) => red && { backgroundColor: theme.primaryRed }};
  ${({ orange, theme }) => orange && { backgroundColor: theme.primaryOrange }};
  ${({ color }) => color && { backgroundColor: color }};
`;

const ContentWrapper = styled.div`
  margin-left: 7px;
  margin-right: 7px;
  margin-top: -2px;
  margin-bottom: -2px;
`;

const Dot = ({ centered, size, red, orange, green, color, content }) => {
  return (
    <Circle
      centered={centered}
      size={size}
      color={color}
      green={green}
      red={red}
      orange={orange}
      content={!!content}
    >
      {content && <ContentWrapper>{content}</ContentWrapper>}
    </Circle>
  );
};

export default Dot;
