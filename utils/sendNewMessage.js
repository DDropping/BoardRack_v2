import axios from "axios";

import baseUrl from "./baseUrl";

const sendNewMessage = async (type, postId, sendToUserId, messageBody) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ type, postId, sendToUserId, messageBody });

  const url = `${baseUrl}/api/messages/sendMessage`;
  const res = await axios.post(url, body, config);
  return res;
};

export default sendNewMessage;
