import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import { ContainerNoOutline, Title, OpinionKey, OpinionValue } from "./style";

export const IconWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  font-weight: bold;
  text-align: center;
  //border: 4px solid ${({ theme }) => theme.primaryGreen};
  border-radius: 50%;
  padding: 10px;
`;

export const IconImage = styled.img`
  width: 100%;
`;

export const CircleBorder = styled.div`
  position: relative;
  text-align: center;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  //background-color: #e53b3b;
  background: linear-gradient(
      270deg,
      ${({ theme }) => theme.primaryGreen} 50%,
      transparent 50%
    ),
    linear-gradient(
      36deg,
      ${({ theme }) => theme.primaryGreen} 50%,
      transparent 50%
    );
`;
export const PercentCircleOutline = styled.div`
  position: relative;
  text-align: center;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  ${({ circleFill, theme }) =>
    circleFill === 1 && {
      background: `linear-gradient(270deg,transparent 50%,${theme.secondaryLightBlue} 50%), linear-gradient(162deg,${theme.secondaryBlue} 50%,${theme.secondaryLightBlue} 50%)`,
    }};
  ${({ circleFill, theme }) =>
    circleFill === 2 && {
      background: `linear-gradient(270deg,transparent 50%,${theme.secondaryLightBlue} 50%), linear-gradient(234deg,${theme.secondaryBlue} 50%,${theme.secondaryLightBlue} 50%)`,
    }};
  ${({ circleFill, theme }) =>
    circleFill === 3 && {
      background: `linear-gradient(270deg,${theme.secondaryBlue} 50%,transparent 50%), linear-gradient(306deg,${theme.secondaryBlue} 50%,${theme.secondaryLightBlue} 50%)`,
    }};
  ${({ circleFill, theme }) =>
    circleFill === 4 && {
      background: `linear-gradient(270deg,${theme.secondaryBlue} 50%,transparent 50%), linear-gradient(378deg,${theme.secondaryBlue} 50%,${theme.secondaryLightBlue} 50%)`,
    }};
  ${({ circleFill, theme }) =>
    circleFill >= 5 && {
      background: theme.secondaryBlue,
    }};
`;

export const Circle = styled.div`
  position: relative;
  top: 5px;
  left: 5px;
  text-align: center;
  width: 65px;
  height: 65px;
  border-radius: 100%;
  background-color: #ffffff;
`;

export const OpinionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const index = ({ post }) => {
  return (
    <>
      {(post.waveSize || post.drive || post.paddlePower || post.movability) && (
        <ContainerNoOutline>
          <Title>Surfer's Opinion</Title>
          <OpinionsContainer>
            <div>
              <PercentCircleOutline circleFill={5}>
                <Circle>
                  <IconWrapper>
                    <IconImage
                      src='/images/icons/br_waveSize.png'
                      alt='wave size'
                    />
                    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                      {post.waveSize && post.waveSize + " ft"}
                    </div>
                  </IconWrapper>
                </Circle>
              </PercentCircleOutline>
              Wave Size(ft)
            </div>

            <div>
              <PercentCircleOutline circleFill={parseInt(post.movability)}>
                <Circle>
                  <IconWrapper>
                    <IconImage
                      src='/images/icons/br_movability.png'
                      alt='wave size'
                    />
                    {post.movability && post.movability + "/5"}
                  </IconWrapper>
                </Circle>
              </PercentCircleOutline>
              Movability
            </div>

            <div>
              <PercentCircleOutline circleFill={parseInt(post.paddlePower)}>
                <Circle>
                  <IconWrapper>
                    <IconImage
                      src='/images/icons/br_paddlePower.png'
                      alt='wave size'
                    />
                    {post.paddlePower && post.paddlePower + "/5"}
                  </IconWrapper>
                </Circle>
              </PercentCircleOutline>
              Paddle Power
            </div>

            <div>
              <PercentCircleOutline circleFill={parseInt(post.drive)}>
                <Circle>
                  <IconWrapper>
                    <IconImage
                      src='/images/icons/br_driveSpeed.png'
                      alt='wave size'
                    />
                    {post.drive && post.drive + "/5"}
                  </IconWrapper>
                </Circle>
              </PercentCircleOutline>
              Drive & Speed
            </div>
          </OpinionsContainer>
        </ContainerNoOutline>
      )}
    </>
  );
};

export default index;
