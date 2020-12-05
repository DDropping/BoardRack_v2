import axios from "axios";

import baseUrl from "./baseUrl";

const sendNewMessage = async (
  type,
  postId,
  sendFromUsername,
  sendToUserId,
  messageBody
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ type, postId, sendToUserId, messageBody });

  const url = `${baseUrl}/api/messages/sendMessage`;
  const res = await axios.post(url, body, config);

  //send email notification to reciever that they have a new message
  const emailBody = JSON.stringify({
    recieverUserId: sendToUserId,
    senderUsername: sendFromUsername,
    messagesUrl: `${baseUrl}/account?view=messages`,
  });

  const emailUrl = `${baseUrl}/api/verification/send/newMessage`;
  axios.post(emailUrl, emailBody, config);

  return res;
};

export default sendNewMessage;
