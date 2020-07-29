import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { RightCircleOutlined } from "@ant-design/icons";

import baseUrl from "../../utils/baseUrl";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  height: 462px;
  width: 200px;
  color: grey;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Center = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: default;
`;

const A = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.primaryDarkGrey};
  :hover {
    color: ${({ theme }) => theme.secondaryBlue};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  padding: 0 2rem;
`;

const TextWrapper = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  text-align: right;
`;

const ViewAllButton = ({ link }) => {
  return (
    <Container>
      <Center>
        <Link href={link} shallow={true}>
          <A href="">
            <IconWrapper>
              <RightCircleOutlined />
            </IconWrapper>
            <TextWrapper>view all</TextWrapper>
          </A>
        </Link>
      </Center>
    </Container>
  );
};

export default ViewAllButton;
