import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { theme } from "../../../pages/_app";

const Container = styled.div`
  margin: 10px 0 0 10px;
  width: 300px;
  height: 442px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryBlue};
`;

const HoverShadow = styled.div`
  height: 175px;
  width: 175px;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  border-radius: 50%;
  transition: ${({ theme }) => theme.easeInOut};
  :hover {
    box-shadow: 0 0 11px rgba(83, 68, 68, 0.4);
  }
`;

const buttonStyle = {
  height: "175px",
  width: "175px",
  fontSize: "1.75rem",
  lineHeight: "1.75rem",
  transition: theme.easeInOut,
  color: theme.primaryBlue,
  borderColor: theme.primaryBlue,
};

const iconStyle = {
  fontSize: "3rem",
  lineHeight: "3rem",
};

const NewPostButton = () => {
  return (
    <Container>
      <HoverShadow>
        <Link scroll={false} href={"/createpost"}>
          <a>
            <Button
              style={buttonStyle}
              shape="circle"
              icon={<PlusOutlined style={iconStyle} />}
            >
              <br />
              New Post
            </Button>
          </a>
        </Link>
      </HoverShadow>
    </Container>
  );
};

export default NewPostButton;
