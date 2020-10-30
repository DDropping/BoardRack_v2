import React from "react";
import styled from "styled-components";

const StatusOverlay = styled.div`
  z-index: 1;
  position: absolute;
  background-color: #00000029;
  height: 100%;
  width: 100%;
`;

const OverlayText = styled.div`
  font-size: ${({ size }) => size}px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryBlue};
  -webkit-transform: rotate(-50deg);
`;

const ImageStatusOverlay = ({ isSold, size }) => {
  return (
    <StatusOverlay>
      <OverlayText size={size}>{isSold ? "Sold" : "Post Removed "}</OverlayText>
    </StatusOverlay>
  );
};

export default ImageStatusOverlay;
