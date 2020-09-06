import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import { theme } from "../../../pages/_app";

const Container = styled.div`
  margin: 10px 0 0 10px;
  width: 175px;
  height: 400px;
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
};

const iconStyle = {
  fontSize: "2.5rem",
  lineHeight: "2.5rem",
};

const ViewAllButton = ({ link }) => {
  return (
    <Container>
      <Link href={link} shallow={true}>
        <a>
          <Button
            style={buttonStyle}
            shape="circle"
            icon={<ArrowRightOutlined style={iconStyle} />}
          >
            <br />
            View All
          </Button>
        </a>
      </Link>
    </Container>
  );
};

export default ViewAllButton;
