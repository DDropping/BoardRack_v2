import React from "react";
import styled from "styled-components";

import timeOrDateAgo from "../../../../utils/timeOrDateAgo";

const Container = styled.div`
  display: flex;
`;

const Justify = styled.div`
  ${({ recieved }) => recieved && { flex: "1", minWidth: "20%" }};
`;

const MessageContainer = styled.div`
  padding: 10px;
  ${({ recieved }) => !recieved && { maxWidth: "calc(80% - 40px)" }};
  ${({ recieved }) => recieved && { textAlign: "right" }};

  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const AvatarContainer = styled.div`
  margin: ${({ recieved }) => (recieved ? "10px 10px 0 0" : "10px 0 0 10px")};
`;

const Body = styled.div`
  text-align: left;
  display: inline-block;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ recieved, theme }) =>
    recieved ? theme.backgroundBlueMenu : theme.backgroundGreyMenu};
`;

const TimeStamp = styled.div`
  display: flex;
  font-style: italic;
  padding: 0 20px;
  color: ${({ theme }) => theme.primaryGrey};
`;

const Message = ({ message, recieved }) => {
  //const formatedMessage = message.body.replace(/\n/g, "<br />");
  const formatedMessage = message.body.split("\n");
  return (
    <Container>
      <Justify recieved={recieved} />
      {!recieved && <AvatarContainer recieved={recieved}></AvatarContainer>}
      <MessageContainer recieved={recieved}>
        <Body recieved={recieved}>
          {formatedMessage.map((message) => {
            return (
              <>
                {message}
                <br />
              </>
            );
          })}
        </Body>
        <TimeStamp>
          {recieved && <div style={{ flex: 1 }} />}
          {recieved ? "Recieved " : "Sent "}
          {timeOrDateAgo(message.timeSent)}
        </TimeStamp>
      </MessageContainer>
      {recieved && (
        <AvatarContainer recieved={recieved}>
          {/* <Avatar
            size={28}
            profileImage={from.profileImage}
            userId={from._id}
            username={from.username}
          /> */}
        </AvatarContainer>
      )}
    </Container>
  );
};

export default Message;
