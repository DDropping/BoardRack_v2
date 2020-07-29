import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: inline-block;
  width: 300px;
  height: 442px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

const buttonStyle = {
  height: "175px",
  width: "175px",
  fontSize: "1.75rem",
  lineHeight: "1.75rem",
  transition: "all 0.2s ease-in-out",
  boxShadow: "0 0 11px rgba(83, 68, 68, 0.2)",
  color: "grey",
};

const iconStyle = {
  fontSize: "3rem",
  lineHeight: "3rem",
};

const NewPostButton = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default NewPostButton;
