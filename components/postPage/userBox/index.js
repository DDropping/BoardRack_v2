import React, { useState } from "react";
import { Avatar, Button, Input } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

import {
  UserBoxContainer,
  AvatarContainer,
  DetailsContainer,
  ContactContainer,
  MessageContainer,
} from "./style";

const { TextArea } = Input;

const index = ({ user, location }) => {
  const [isContact, setIsContact] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <UserBoxContainer>
      <AvatarContainer>
        <Avatar size={45} icon={<UserOutlined />} />
      </AvatarContainer>
      <DetailsContainer>
        <strong style={{ fontSize: "20px", lineHeight: "20px" }}>
          {user.username}
        </strong>
        <div>{location.city + ", " + location.state}</div>
      </DetailsContainer>
      <ContactContainer>
        {!isContact && (
          <Button type="primary" onClick={() => setIsContact(!isContact)}>
            Contact
          </Button>
        )}
        {isContact && (
          <div>
            <PhoneOutlined /> (831) 535-3535
            <br />
            <MailOutlined /> boards@boardrack.com
          </div>
        )}
      </ContactContainer>
      {isContact && (
        <MessageContainer>
          <TextArea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Send " + user.username + " a message..."}
            style={{ marginBottom: "10px" }}
          />
          <Button type="primary" block>
            Send Message
          </Button>
        </MessageContainer>
      )}
    </UserBoxContainer>
  );
};

export default index;
