import React, { useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Input } from "antd";
import axios from "axios";

import baseUrl from "../../../utils/baseUrl";

const { TextArea } = Input;

const Container = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.4);
  padding: 10px;
  width: 300px;
  border-left: 2px solid ${({ theme }) => theme.primaryBlue};
  border-bottom: 2px solid ${({ theme }) => theme.primaryBlue};
  border-right: 2px solid ${({ theme }) => theme.primaryBlue};
`;

const OptionsList = styled.ul`
  list-style-type: none;
`;
const Option = styled.li``;

const ButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const reportModal = ({ postId, setReportOpen }) => {
  const [isInappropriate, setInappropriate] = useState(false);
  const [isInsensitive, setInsensitive] = useState(false);
  const [isScam, setScam] = useState(false);
  const [message, setMessage] = useState("");

  const handleReport = () => {
    try {
      const url = `${baseUrl}/api/posts/reportPost/${postId}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        isInappropriate,
        isInsensitive,
        isScam,
        message,
      });

      axios.patch(url, body, config);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <OptionsList>
        <Option>
          <Checkbox onChange={() => setInappropriate(!isInappropriate)}>
            Inappropriate Posting
          </Checkbox>
        </Option>
        <Option>
          <Checkbox onChange={() => setInsensitive(!isInsensitive)}>
            Insensitive Posting
          </Checkbox>
        </Option>
        <Option>
          <Checkbox onChange={() => setScam(!isScam)}>Potential Scam</Checkbox>
        </Option>
      </OptionsList>
      <TextArea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Optional message describing offense"
      />
      <ButtonsContainer>
        <Button onClick={() => setReportOpen(false)}>Cancel</Button>
        <Button
          type="primary"
          danger
          disabled={!isInappropriate && !isInsensitive && !isScam}
          onClick={handleReport}
        >
          Sumbit Report
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default reportModal;
