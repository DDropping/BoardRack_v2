import React from "react";
import styled from "styled-components";

const Circle = styled.span`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  ${({ centered }) => centered && { margin: "auto 0" }};
  //background-color: ${({ theme }) => theme.primaryGreen};
  ${({ green, theme }) => green && { backgroundColor: theme.primaryGreen }};
  ${({ red, theme }) => red && { backgroundColor: theme.primaryRed }};
  ${({ orange, theme }) => orange && { backgroundColor: theme.primaryOrange }};
  ${({ color }) => color && { backgroundColor: color }};
`;

const Dot = ({ centered, size, red, orange, green, color }) => {
  return (
    <Circle
      centered={centered}
      size={size}
      color={color}
      green={green}
      red={red}
      orange={orange}
    />
  );
};

export default Dot;
