import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tooltip } from "antd";
import { ExclamationCircleTwoTone, MailOutlined } from "@ant-design/icons";

import { Container, Header, Username, TimeAgo, Description } from "./style";
import timeOrDateAgo from "../../../../utils/timeOrDateAgo";
import Avatar from "../../../avatar";
import BadgeDot from "../../../badge/Dot";

const MessageOverview = ({ messageDetails, userId }) => {
  const router = useRouter();

  const timeAgo = timeOrDateAgo(messageDetails.lastUpdated, true);
  const from = messageDetails.users.find(
    (userDetails) => userDetails._id !== userId
  );

  return (
    <Link
      href={
        router.query.thread === messageDetails._id
          ? "/account?view=messages"
          : `/account?view=messages&thread=${messageDetails._id}`
      }
      shallow={true}
    >
      <Container active={router.query.thread === messageDetails._id}>
        <Avatar
          size={42}
          profileImage={from ? from.profileImage : null}
          userId={from ? from._id : null}
          username={from ? from.username : null}
        />
        <div style={{ flex: 1, marginLeft: "10px" }}>
          <Header>
            <Username>{from ? from.username : "BoardRack User"}</Username>
            <TimeAgo>{timeAgo}</TimeAgo>
          </Header>
          <Description>
            {messageDetails.type === "post" &&
              messageDetails.post &&
              "$" + messageDetails.post.price + " " + messageDetails.post.title}
            {messageDetails.type === "post" && !messageDetails.post && (
              <div>
                <ExclamationCircleTwoTone twoToneColor="#ffa501" />
                {" This Post No Longer Exists"}
              </div>
            )}
            {messageDetails.type === "support" && "BoardRack Support"}
            {!messageDetails.isRead &&
              messageDetails.messages[messageDetails.messages.length - 1]
                .from === userId && (
                <Tooltip
                  placement="top"
                  title={
                    from
                      ? `${from.username} hasn't read your message`
                      : "User hasn't read your message"
                  }
                >
                  <MailOutlined />
                </Tooltip>
              )}

            {!messageDetails.isRead &&
              messageDetails.messages[messageDetails.messages.length - 1]
                .from !== userId && <BadgeDot size={10} centered red />}
          </Description>
        </div>
      </Container>
    </Link>
  );
};

export default MessageOverview;
