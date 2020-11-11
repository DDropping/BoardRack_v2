import connectDb from "../../../../utils/ConnectDb";
import Message from "../../../../models/Message";

import authenticate from "../../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await handlePatchRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   PATCH api/messages/flagMessageAsViewed/[id]
// @desc    Mark message as viewed
// @access  Public
async function handlePatchRequest(req, res) {
  const {
    query: { id },
  } = req;
  try {
    const messageData = await Message.findByIdAndUpdate(id, { isRead: true });
    if (!messageData) res.status(404).send("Message Not Found");

    res.status(200).send("Message Viewed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
