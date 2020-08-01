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

const buttonStyle = {
  height: "125px",
  width: "125px",
  fontSize: "1.25rem",
  lineHeight: "1.25rem",
  transition: theme.easeInOut,
  color: theme.primaryWhite,
  borderColor: theme.primaryBlue,
};

const iconStyle = {
  fontSize: "2.5rem",
  lineHeight: "2.5rem",
};

const NewPostButton = () => {
  return (
    <Container>
      <Link scroll={false} href={"/createpost"}>
        <a>
          <Button
            style={buttonStyle}
            type="primary"
            shape="circle"
            icon={<PlusOutlined style={iconStyle} />}
          >
            <br />
            New Post
          </Button>
        </a>
      </Link>
    </Container>
  );
};

export default NewPostButton;
