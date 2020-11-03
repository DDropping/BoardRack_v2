import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input } from "antd";
import { PhoneOutlined, MailOutlined, CheckOutlined } from "@ant-design/icons";

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
  const [isSending, setSending] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send Message");
  const currentUser = useSelector((state) => state.auth.user);

  const sendMessage = async () => {
    if (message.length > 0) {
      try {
        setSending(true);
        await sendNewMessage("post", postId, user._id, message);
        setMessage("");
        setSending(false);
        setSendButtonText("Message Sent!");
      } catch (err) {
        setSending(false);
        setSendButtonText("Couldn't Send Message");
      }
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
            onChange={(e) => {
              setMessage(e.target.value);
              setSendButtonText("Send Message");
            }}
            placeholder={"Send " + user.username + " a message..."}
            style={{ marginBottom: "10px" }}
          />
          {currentUser ? (
            <Button
              type="primary"
              disabled={currentUser._id === user._id}
              loading={isSending}
              block
              onClick={sendMessage}
            >
              {sendButtonText === "Message Sent!" && (
                <CheckOutlined style={{ color: "white" }} />
              )}
              {sendButtonText}
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
