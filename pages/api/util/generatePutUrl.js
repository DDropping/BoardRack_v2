import { generatePutUrl } from "../../../utils/AWSPresigner";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req, res) {
  const { Key, ContentType } = req.query;
  try {
    const putURL = await generatePutUrl(Key, ContentType);
    if (!putURL) res.status(500).send("Server Error");

    res.status(200).send({ putURL });
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default handler;
