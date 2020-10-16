import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

import {
  UserBoxContainer,
  AvatarContainer,
  DetailsContainer,
  ContactContainer,
  MessageContainer,
} from "./style";
import sendNewMessage from "../../../utils/sendNewMessage";
import Avatar from "../../avatar";

const { TextArea } = Input;

const index = ({ user, location, postId }) => {
  const [isContact, setIsContact] = useState(false);
  const [message, setMessage] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const sendMessage = () => {
    if (message.length > 0) {
      sendNewMessage("post", postId, user._id, message);
    }
  };

  return (
    <UserBoxContainer>
      <AvatarContainer>
        <Avatar
          profileImage={user.profileImage}
          userId={user._id}
          username={user.username}
          size={45}
        />
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
          {isAuthenticated ? (
            <Button type="primary" block onClick={sendMessage}>
              Send Message
            </Button>
          ) : (
            <Button type="primary" block disabled>
              Login to send messages
            </Button>
          )}
        </MessageContainer>
      )}
    </UserBoxContainer>
  );
};

export default index;
